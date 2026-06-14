"use client";

import { useEffect, useRef } from "react";

/**
 * SunField — a futuristic, volumetric solar core rendered on <canvas>.
 *
 * Layers (back to front):
 *   1. Soft atmospheric glow
 *   2. Tilted orbital rings, each carrying a travelling energy node
 *   3. A 3D-shaded sphere: hot white core, amber body, dark terminator,
 *      bright rim light and a slow plasma shimmer
 *   4. Rotating corona flares + drifting energy motes + lens glints
 *
 * Warm palette only, DPR-aware, pauses when hidden, bows out for reduced motion.
 * The whole field parallaxes gently toward the pointer for depth.
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
    let R = 0; // sphere radius
    const pointer = { x: 0.5, y: 0.5, tx: 0.5, ty: 0.5 };

    type Mote = { a: number; r: number; speed: number; size: number; tw: number; tone: number };
    let motes: Mote[] = [];

    type Ring = { tilt: number; rx: number; ry: number; spin: number; nodes: number; offset: number };
    let rings: Ring[] = [];

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
      cx = w * 0.62;
      cy = h * 0.5;
      R = Math.max(70, Math.min(w, h) * 0.17);
      seed();
    }

    function seed() {
      const count = Math.min(80, Math.round((w * h) / 19000));
      motes = Array.from({ length: count }, () => ({
        a: Math.random() * Math.PI * 2,
        r: R * (1.5 + Math.random() * 3.4),
        speed: (0.00012 + Math.random() * 0.0004) * (Math.random() > 0.5 ? 1 : -1),
        size: 0.6 + Math.random() * 2,
        tw: Math.random() * Math.PI * 2,
        tone: Math.random(),
      }));
      rings = [
        { tilt: -0.42, rx: R * 2.1, ry: R * 0.62, spin: 0.00022, nodes: 1, offset: 0 },
        { tilt: 0.3, rx: R * 2.75, ry: R * 0.5, spin: -0.00015, nodes: 1, offset: 2.2 },
        { tilt: 0.9, rx: R * 3.4, ry: R * 0.42, spin: 0.0001, nodes: 1, offset: 4.1 },
      ];
    }

    function drawGlow(ox: number, oy: number) {
      const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, R * 7);
      g.addColorStop(0, "rgba(247,183,51,0.34)");
      g.addColorStop(0.16, "rgba(232,128,31,0.26)");
      g.addColorStop(0.42, "rgba(220,80,0,0.10)");
      g.addColorStop(1, "rgba(16,9,4,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);
    }

    function drawRing(ring: Ring, ox: number, oy: number, t: number, front: boolean) {
      const rot = ring.tilt + (reduce ? 0 : t * ring.spin);
      // ring band
      ctx.save();
      ctx.translate(ox, oy);
      ctx.rotate(rot);
      ctx.beginPath();
      ctx.ellipse(0, 0, ring.rx, ring.ry, 0, 0, Math.PI * 2);
      ctx.strokeStyle = front ? "rgba(255,237,215,0.16)" : "rgba(255,237,215,0.05)";
      ctx.lineWidth = front ? 1.4 : 1;
      ctx.stroke();
      ctx.restore();

      // travelling node on the ring
      if (reduce) return;
      const na = ring.offset + t * ring.spin * 7;
      const sinv = Math.sin(na);
      const isFront = sinv > 0;
      if (isFront !== front) return;
      const ex = Math.cos(na) * ring.rx;
      const ey = Math.sin(na) * ring.ry;
      const nx = ox + ex * Math.cos(rot) - ey * Math.sin(rot);
      const ny = oy + ex * Math.sin(rot) + ey * Math.cos(rot);
      const depth = 0.5 + Math.abs(sinv) * 0.5;
      const ns = (front ? 3.4 : 2.2) * depth;
      const ng = ctx.createRadialGradient(nx, ny, 0, nx, ny, ns * 4);
      ng.addColorStop(0, `rgba(255,240,210,${0.9 * depth})`);
      ng.addColorStop(0.4, `rgba(247,183,51,${0.5 * depth})`);
      ng.addColorStop(1, "rgba(247,183,51,0)");
      ctx.fillStyle = ng;
      ctx.beginPath();
      ctx.arc(nx, ny, ns * 4, 0, Math.PI * 2);
      ctx.fill();
    }

    function drawSphere(ox: number, oy: number, t: number) {
      const pulse = reduce ? 1 : 1 + Math.sin(t * 0.0009) * 0.035;
      const r = R * pulse;
      // light comes from upper-left
      const lx = ox - r * 0.32;
      const ly = oy - r * 0.32;

      // body: hot core to warm edge, lit from upper-left
      const body = ctx.createRadialGradient(lx, ly, 0, ox, oy, r);
      body.addColorStop(0, "rgba(255,248,232,1)");
      body.addColorStop(0.28, "rgba(252,206,108,1)");
      body.addColorStop(0.62, "rgba(232,128,31,1)");
      body.addColorStop(0.9, "rgba(196,66,6,1)");
      body.addColorStop(1, "rgba(150,44,4,1)");
      ctx.beginPath();
      ctx.arc(ox, oy, r, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      // terminator shading (dark falloff toward lower-right) for 3D volume
      const shade = ctx.createRadialGradient(
        ox + r * 0.42,
        oy + r * 0.42,
        r * 0.1,
        ox + r * 0.2,
        oy + r * 0.2,
        r * 1.25
      );
      shade.addColorStop(0, "rgba(40,12,2,0.0)");
      shade.addColorStop(0.7, "rgba(40,12,2,0.0)");
      shade.addColorStop(1, "rgba(20,6,1,0.55)");
      ctx.save();
      ctx.beginPath();
      ctx.arc(ox, oy, r, 0, Math.PI * 2);
      ctx.clip();
      ctx.fillStyle = shade;
      ctx.fillRect(ox - r, oy - r, r * 2, r * 2);

      // plasma shimmer: soft moving hotspots clipped to the disk
      if (!reduce) {
        for (let i = 0; i < 3; i++) {
          const pa = t * 0.0004 * (i + 1) + i * 2.1;
          const px = ox + Math.cos(pa) * r * 0.4;
          const py = oy + Math.sin(pa * 1.3) * r * 0.4;
          const pg = ctx.createRadialGradient(px, py, 0, px, py, r * 0.7);
          pg.addColorStop(0, "rgba(255,236,180,0.28)");
          pg.addColorStop(1, "rgba(255,236,180,0)");
          ctx.fillStyle = pg;
          ctx.fillRect(ox - r, oy - r, r * 2, r * 2);
        }
      }
      ctx.restore();

      // rim light on the shadow side (back-scatter)
      ctx.save();
      ctx.beginPath();
      ctx.arc(ox, oy, r, 0, Math.PI * 2);
      ctx.lineWidth = 2;
      const rim = ctx.createLinearGradient(ox - r, oy - r, ox + r, oy + r);
      rim.addColorStop(0, "rgba(255,240,210,0)");
      rim.addColorStop(0.7, "rgba(255,170,70,0.0)");
      rim.addColorStop(1, "rgba(255,190,110,0.7)");
      ctx.strokeStyle = rim;
      ctx.stroke();
      ctx.restore();
    }

    function drawCorona(ox: number, oy: number, t: number) {
      if (reduce) return;
      const rays = 72;
      ctx.save();
      ctx.translate(ox, oy);
      ctx.rotate(t * 0.00003);
      for (let i = 0; i < rays; i++) {
        const ang = (i / rays) * Math.PI * 2;
        const flick = 1.18 + Math.sin(t * 0.0015 + i * 1.7) * 0.32;
        const len = R * flick;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ang) * R * 1.02, Math.sin(ang) * R * 1.02);
        ctx.lineTo(Math.cos(ang) * len, Math.sin(ang) * len);
        ctx.strokeStyle = `rgba(255,206,130,${0.05 + (i % 3) * 0.018})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.restore();
    }

    function drawMotes(t: number, ox: number, oy: number) {
      for (const m of motes) {
        if (!reduce) m.a += m.speed;
        const x = ox + Math.cos(m.a) * m.r;
        const y = oy + Math.sin(m.a) * m.r * 0.82;
        const tw = 0.35 + Math.abs(Math.sin(t * 0.001 + m.tw)) * 0.65;
        const col = m.tone > 0.6 ? "247,183,51" : m.tone > 0.3 ? "232,128,31" : "255,237,215";
        ctx.beginPath();
        ctx.arc(x, y, m.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col},${0.5 * tw})`;
        ctx.fill();
      }
    }

    let raf = 0;
    let running = true;
    function frame(t: number) {
      if (!running) return;
      pointer.x += (pointer.tx - pointer.x) * 0.05;
      pointer.y += (pointer.ty - pointer.y) * 0.05;
      const ox = cx + (pointer.x - 0.5) * 30;
      const oy = cy + (pointer.y - 0.5) * 30;

      ctx.clearRect(0, 0, w, h);
      drawGlow(ox, oy);
      for (const ring of rings) drawRing(ring, ox, oy, t, false);
      drawCorona(ox, oy, t);
      drawSphere(ox, oy, t);
      for (const ring of rings) drawRing(ring, ox, oy, t, true);
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
