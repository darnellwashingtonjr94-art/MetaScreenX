import { create } from 'zustand';

type Tab = 'explore' | 'layers' | 'projects' | 'settings';

interface UIState {
  activeTab: Tab;
  activeScreenId: number;
  isSidebarOpen: boolean;
  setTab: (tab: Tab) => void;
  setScreen: (id: number) => void;
  toggleSidebar: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  activeTab: 'explore',
  activeScreenId: 1,
  isSidebarOpen: true,
  setTab: (tab) => set({ activeTab: tab }),
  setScreen: (id) => set({ activeScreenId: id }),
  toggleSidebar: () => set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));
