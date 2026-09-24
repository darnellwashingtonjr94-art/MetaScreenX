import React, { useEffect, useRef } from 'react';
import { useUIStore } from '../store/uiStore';

export const GlobeRenderer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { activeScreenId } = useUIStore();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
    if (!gl) {
      console.error('WebGL not supported on this device.');
      return;
    }

    // Set Viewport Clear Color
    gl.clearColor(0.01, 0.03, 0.08, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // Render loop callback target for 3D Camera updates
    let animationFrameId: number;
    const render = () => {
      // 3D Matrix transform updates driven by activeScreenId logic
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [activeScreenId]);

  return (
    <div className="absolute inset-0 w-full h-full bg-slate-950">
      <canvas ref={canvasRef} className="w-full h-full block" />
      <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur px-3 py-1.5 rounded-md border border-slate-700 text-xs text-slate-400 font-mono">
        Active Screen Mode: #{activeScreenId}
      </div>
    </div>
  );
};
