"use client";

import { useEffect, useRef } from "react";

/**
 * SunField — a live <canvas> of a radiant solar core surrounded by drifting
 * energy motes and slowly rotating corona rays. Warm-palette only, DPR-aware,
 * pauses when the tab is hidden, and bows out for reduced-motion users.
 *
 * The whole field gently parallaxes toward the pointer for depth.
 */
export default function SunField({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };

    type Mote = { a: number; r: number; speed: number; size: number; tw: number; hue: number };
    let motes: Mote[] = [];

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // sun anchored lower-right-of-centre, echoing the reference glow
      cx = w * 0.62;
      cy = h * 0.52;
      seed();
    }

    function seed() {
      const count = Math.min(90, Math.round((w * h) / 16000));
      motes = Array.from({ length: count }, () => {
        const a = Math.random() * Math.PI * 2;
        const r = 80 + Math.random() * Math.max(w, h) * 0.55;
        return {
          a,
          r,
          speed: 0.0002 + Math.random() * 0.0006,
          size: 0.6 + Math.random() * 2.2,
          tw: Math.random() * Math.PI * 2,
          hue: Math.random(),
        };
      });
    }

    function drawSun(t: number) {
      const px = (pointer.x - 0.5) * 26;
      const py = (pointer.y - 0.5) * 26;
      const ox = cx + px;
      const oy = cy + py;

      const pulse = reduce ? 1 : 1 + Math.sin(t * 0.0009) * 0.06;
      const coreR = Math.min(w, h) * 0.16 * pulse;

      // outer atmospheric glow
      const glow = ctx.createRadialGradient(ox, oy, 0, ox, oy, coreR * 6);
      glow.addColorStop(0, "rgba(247,183,51,0.42)");
      glow.addColorStop(0.18, "rgba(232,128,31,0.30)");
      glow.addColorStop(0.45, "rgba(220,80,0,0.12)");
      glow.addColorStop(1, "rgba(16,9,4,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      // corona rays
      if (!reduce) {
        const rays = 64;
        ctx.save();
        ctx.translate(ox, oy);
        ctx.rotate(t * 0.00004);
        for (let i = 0; i < rays; i++) {
          const ang = (i / rays) * Math.PI * 2;
          const len = coreR * (1.7 + Math.sin(t * 0.0012 + i) * 0.35);
          ctx.beginPath();
          ctx.moveTo(Math.cos(ang) * coreR * 1.05, Math.sin(ang) * coreR * 1.05);
          ctx.lineTo(Math.cos(ang) * len, Math.sin(ang) * len);
          ctx.strokeStyle = `rgba(255,237,215,${0.04 + (i % 2) * 0.02})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.restore();
      }

      // bright core
      const core = ctx.createRadialGradient(ox, oy, 0, ox, oy, coreR);
      core.addColorStop(0, "rgba(255,245,225,0.95)");
      core.addColorStop(0.4, "rgba(247,183,51,0.7)");
      core.addColorStop(1, "rgba(232,128,31,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(ox, oy, coreR, 0, Math.PI * 2);
      ctx.fill();

      return { ox, oy };
    }

    function drawMotes(t: number, ox: number, oy: number) {
      for (const m of motes) {
        if (!reduce) m.a += m.speed;
        const x = ox + Math.cos(m.a) * m.r;
        const y = oy + Math.sin(m.a) * m.r * 0.78;
        const twinkle = 0.4 + Math.abs(Math.sin(t * 0.001 + m.tw)) * 0.6;
        const col = m.hue > 0.6 ? "247,183,51" : m.hue > 0.3 ? "232,128,31" : "255,237,215";
        ctx.beginPath();
        ctx.arc(x, y, m.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${0.5 * twinkle})`;
        ctx.fill();
      }
    }

    let raf = 0;
    let running = true;
    function frame(t: number) {
      if (!running) return;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      ctx.clearRect(0, 0, w, h);
      const { ox, oy } = drawSun(t);
      drawMotes(t, ox, oy);
      raf = requestAnimationFrame(frame);
    }

    function onPointer(e: PointerEvent) {
      pointer.tx = e.clientX / window.innerWidth;
      pointer.ty = e.clientY / window.innerHeight;
    }
    function onVisibility() {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(frame);
      else cancelAnimationFrame(raf);
    }

    resize();
    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
