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
