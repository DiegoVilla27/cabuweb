import { create } from "zustand";

interface UIState {
  isSidenavOpen: boolean;
  activeModal: "web" | "app" | "software" | null;
  toggleSidenav: () => void;
  closeSidenav: () => void;
  openModal: (type: "web" | "app" | "software") => void;
  closeModal: () => void;
}

export const useStore = create<UIState>((set) => ({
  isSidenavOpen: false,
  activeModal: null,

  toggleSidenav: () => set((state) => ({ isSidenavOpen: !state.isSidenavOpen })),
  closeSidenav: () => set({ isSidenavOpen: false }),

  openModal: (type) => set({ activeModal: type }),
  closeModal: () => set({ activeModal: null }),
}));
