import React, { useState } from 'react';
import { Layers, Sliders, Eye, EyeOff } from 'lucide-react';

const LAYER_SCREENS = [
  "Base Map Selector", "Borders & Labels Toggle", "Places & POIs Filter", "Roads & Transit Networks", 
  "3D Trees & Vegetation", "Live Traffic Overlay", "Live Flight Tracker", "Live Maritime & Shipping", 
  "Weather: Precipitation", "Weather: Wind Vectors", "Weather: Temp Gradients", "Natural Hazards", 
  "Air Quality Index (AQI)", "Deforestation / Land Cover", "Ocean Currents & SST", "Population Density", 
  "Real Estate / Parcels", "Land Use & Zoning Maps", "KML / KMZ Importer", "GeoJSON / Shapefile Import", 
  "WMS / WFS Server Links", "Layer Z-Index Reordering", "Layer Opacity Slider", "Style & Color Editor", "Data Attribute Viewer"
];

export const LayersTab: React.FC = () => {
  const [enabledLayers, setEnabledLayers] = useState<Record<number, boolean>>({ 1: true, 2: true });
  const [opacity, setOpacity] = useState<Record<number, number>>({ 1: 100, 2: 80 });

  const toggleLayer = (id: number) => {
    setEnabledLayers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-2 p-3 overflow-y-auto max-h-[calc(100vh-80px)] scrollbar-none">
      {LAYER_SCREENS.map((name, index) => {
        const id = index + 1;
        const isEnabled = !!enabledLayers[id];
        return (
          <div key={id} className="p-3 bg-slate-800/60 border border-slate-700/80 rounded-lg space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-medium text-slate-200 truncate">{name}</span>
              <button onClick={() => toggleLayer(id)} className="text-slate-400 hover:text-white">
                {isEnabled ? <Eye className="w-4 h-4 text-emerald-400" /> : <EyeOff className="w-4 h-4 text-slate-500" />}
              </button>
            </div>
            {isEnabled && (
              <div className="flex items-center space-x-2 pt-1">
                <Sliders className="w-3 h-3 text-slate-400" />
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={opacity[id] ?? 100}
                  onChange={(e) => setOpacity({ ...opacity, [id]: Number(e.target.value) })}
                  className="w-full h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
