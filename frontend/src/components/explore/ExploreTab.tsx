import React from 'react';
import { useUIStore } from '../../store/uiStore';
import { Eye, Compass, Globe, Film, Sparkles } from 'lucide-react';

const EXPLORE_SCREENS = [
  "Global Globe View", "Regional 2D View", "Local 3D Buildings View", "Street View Split-Screen", 
  "Multi-View (N/S/E/W/Top)", "Cinematic Orbit View", "Point-to-Point Flight", "Spiral Descent View", 
  "Day/Night Cycle View", "Historical Timeline View", "Real-time Weather View", "Clouds & Atmosphere", 
  "Ocean Bathymetry View", "Subsurface/Seismic View", "Space / Night Sky View", "Mars / Moon Planet View", 
  "Grid Coordinates Overlay", "First Person Walk Mode", "Drone Flight Simulation", "VR Headset Mode", 
  "High-Contrast View", "Heatmap Density View", "Wireframe 3D View", "Presentation / Kiosk", "Clean Fullscreen"
];

export const ExploreTab: React.FC = () => {
  const { activeScreenId, setScreen } = useUIStore();

  return (
    <div className="space-y-2 p-3 overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-none">
      {EXPLORE_SCREENS.map((name, index) => {
        const id = index + 1;
        const isActive = activeScreenId === id;
        return (
          <button
            key={id}
            onClick={() => setScreen(id)}
            className={`w-full flex items-center justify-between p-3 rounded-lg border text-sm transition-all ${
              isActive 
                ? 'bg-blue-600/30 border-blue-500 text-white font-semibold shadow-lg' 
                : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-700/60'
            }`}
          >
            <div className="flex items-center space-x-3 truncate">
              <span className="text-xs font-mono text-slate-400 w-5">{id.toString().padStart(2, '0')}</span>
              <span className="truncate">{name}</span>
            </div>
            {isActive ? <Compass className="w-4 h-4 text-blue-400 animate-spin" /> : <Eye className="w-4 h-4 text-slate-500" />}
          </button>
        );
      })}
    </div>
  );
};
