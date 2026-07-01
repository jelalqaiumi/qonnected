"use client";

import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number; r: number };
type Anchor = { x: number; y: number; bx: number; by: number; phase: number; r: number; label: string };
type Pulse = { a: number; b: number; t: number; sp: number; delay: number };

export default function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let nodes: Node[] = [];
    let anchors: Anchor[] = [];
    let pulses: Pulse[] = [];
    const mouse = { x: -999, y: -999 };
    let raf = 0;
    let t = 0;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function build() {
      nodes = [];
      anchors = [];
      pulses = [];
      const A = [
        { x: W * 0.58, y: H * 0.3, label: "Idéer" },
        { x: W * 0.86, y: H * 0.5, label: "System" },
        { x: W * 0.66, y: H * 0.74, label: "Människor" },
      ];
      A.forEach((a) =>
        anchors.push({ ...a, r: 6, bx: a.x, by: a.y, phase: Math.random() * 6.28 })
      );
      const count = W < 680 ? 16 : W < 1100 ? 26 : 38;
      for (let i = 0; i < count; i++) {
        const rx = Math.pow(Math.random(), 0.7);
        nodes.push({
          x: W * (0.3 + rx * 0.7),
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 1.1,
        });
      }
      const pairs = [
        [0, 1],
        [1, 2],
        [2, 0],
        [0, 1],
      ];
      pairs.forEach((p, i) =>
        pulses.push({ a: p[0], b: p[1], t: Math.random(), sp: 0.0016 + Math.random() * 0.0014, delay: i * 120 })
      );
    }

    function size() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function nearestNode(ax: number, ay: number): Node | null {
      let best: Node | null = null;
      let bd = 1e9;
      for (const n of nodes) {
        const d = (n.x - ax) ** 2 + (n.y - ay) ** 2;
        if (d < bd) {
          bd = d;
          best = n;
        }
      }
      return best;
    }

    function frame() {
      t++;
      ctx!.clearRect(0, 0, W, H);
      const LINK = W < 680 ? 108 : 150;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < W * 0.22 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        const dx = n.x - mouse.x;
        const dy = n.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 14000) {
          const f = ((14000 - d2) / 14000) * 0.6;
          n.x += (dx / Math.sqrt(d2 + 1)) * f;
          n.y += (dy / Math.sqrt(d2 + 1)) * f;
        }
      }
      anchors.forEach((a) => {
        a.x = a.bx + Math.sin(t * 0.006 + a.phase) * 10;
        a.y = a.by + Math.cos(t * 0.005 + a.phase) * 10;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < LINK) {
            const o = 1 - d / LINK;
            ctx!.strokeStyle = `rgba(120,170,240,${0.16 * o})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      ctx!.lineWidth = 1.3;
      anchors.forEach((a, i) => {
        const b = anchors[(i + 1) % anchors.length];
        ctx!.strokeStyle = "rgba(120,180,255,0.5)";
        ctx!.beginPath();
        ctx!.moveTo(a.x, a.y);
        ctx!.lineTo(b.x, b.y);
        ctx!.stroke();
        const nn = nearestNode(a.x, a.y);
        if (nn) {
          ctx!.strokeStyle = "rgba(120,180,255,0.28)";
          ctx!.beginPath();
          ctx!.moveTo(a.x, a.y);
          ctx!.lineTo(nn.x, nn.y);
          ctx!.stroke();
        }
      });

      for (const nd of nodes) {
        ctx!.fillStyle = "rgba(150,200,255,0.55)";
        ctx!.beginPath();
        ctx!.arc(nd.x, nd.y, nd.r, 0, 6.2832);
        ctx!.fill();
      }

      pulses.forEach((p) => {
        if (p.delay > 0) {
          p.delay--;
          return;
        }
        p.t += p.sp;
        if (p.t > 1) p.t = 0;
        const a = anchors[p.a];
        const b = anchors[p.b];
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        const g = ctx!.createRadialGradient(x, y, 0, x, y, 9);
        g.addColorStop(0, "rgba(160,220,255,0.95)");
        g.addColorStop(1, "rgba(120,200,255,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(x, y, 9, 0, 6.2832);
        ctx!.fill();
        ctx!.fillStyle = "#7fc8ff";
        ctx!.beginPath();
        ctx!.arc(x, y, 2.6, 0, 6.2832);
        ctx!.fill();
      });

      anchors.forEach((a) => {
        const g = ctx!.createRadialGradient(a.x, a.y, 0, a.x, a.y, 22);
        g.addColorStop(0, "rgba(70,180,255,0.45)");
        g.addColorStop(1, "rgba(70,180,255,0)");
        ctx!.fillStyle = g;
        ctx!.beginPath();
        ctx!.arc(a.x, a.y, 22, 0, 6.2832);
        ctx!.fill();
        ctx!.fillStyle = "#0b2f74";
        ctx!.beginPath();
        ctx!.arc(a.x, a.y, a.r, 0, 6.2832);
        ctx!.fill();
        ctx!.strokeStyle = "rgba(120,200,255,0.7)";
        ctx!.lineWidth = 2;
        ctx!.beginPath();
        ctx!.arc(a.x, a.y, a.r, 0, 6.2832);
        ctx!.stroke();
        ctx!.font = '600 12px var(--font-space-mono), monospace';
        ctx!.fillStyle = "rgba(200,225,255,0.92)";
        ctx!.textAlign = "left";
        ctx!.textBaseline = "middle";
        ctx!.fillText(a.label, a.x + a.r + 9, a.y);
      });

      raf = requestAnimationFrame(frame);
    }

    const onMove = (e: MouseEvent) => {
      const r = canvas!.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    const onLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };
    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        size();
        if (reduce) {
          cancelAnimationFrame(raf);
          frame();
          cancelAnimationFrame(raf);
        }
      }, 180);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    size();
    if (reduce) {
      frame();
      cancelAnimationFrame(raf);
    } else {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-[1] h-full w-full" />;
}
