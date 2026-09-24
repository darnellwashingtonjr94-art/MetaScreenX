import React from 'react';
import { useUIStore } from './store/uiStore';

export default function App() {
  const { activeTab, setTab, isSidebarOpen } = useUIStore();

  return (
    <div className="h-screen w-screen bg-slate-900 text-white flex overflow-hidden">
      {/* Primary Nav */}
      <nav className="w-16 h-full bg-slate-800 border-r border-slate-700 flex flex-col items-center py-4 z-20">
        <button onClick={() => setTab('explore')} className="p-3 hover:bg-slate-700">Expl</button>
        <button onClick={() => setTab('layers')} className="p-3 hover:bg-slate-700">Layr</button>
        <button onClick={() => setTab('projects')} className="p-3 hover:bg-slate-700">Proj</button>
      </nav>

      {/* 25-Screen Panel Container */}
      <aside className={`h-full w-80 bg-slate-800/90 border-r border-slate-700 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-10`}>
        <div className="p-4 border-b border-slate-700">
          <h2 className="text-lg font-bold capitalize">{activeTab} Dashboard</h2>
        </div>
        {/* Dynamic component injection goes here based on activeScreenId */}
      </aside>

      {/* 3D WebGL Canvas Area */}
      <main className="flex-1 relative">
        <div className="absolute inset-0 bg-[url('/earth-placeholder.jpg')] bg-cover bg-center opacity-50" />
      </main>
    </div>
  );
}
