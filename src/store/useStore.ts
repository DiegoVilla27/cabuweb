import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UIState {
  isSidenavOpen: boolean;
  activeModal: "web" | "app" | "software" | null;
  lang: "es" | "en";
  toggleSidenav: () => void;
  closeSidenav: () => void;
  openModal: (type: "web" | "app" | "software") => void;
  closeModal: () => void;
  setLang: (lang: "es" | "en") => void;
}

export const useStore = create<UIState>()(
  persist(
    (set) => ({
      isSidenavOpen: false,
      activeModal: null,
      lang: "es",

      toggleSidenav: () => set((state) => ({ isSidenavOpen: !state.isSidenavOpen })),
      closeSidenav: () => set({ isSidenavOpen: false }),

      openModal: (type) => set({ activeModal: type }),
      closeModal: () => set({ activeModal: null }),

      setLang: (lang) => set({ lang }),
    }),
    {
      name: "cabuweb-ui-state",
      partialize: (state) => ({ lang: state.lang }),
    }
  )
);
