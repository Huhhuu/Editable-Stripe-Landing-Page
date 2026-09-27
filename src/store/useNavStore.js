import { create } from 'zustand';

export const useNavStore = create((set) => ({
  isMobileMenuOpen: false,
  activeDropdown: null,

  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
  openMobileMenu: () => set({ isMobileMenuOpen: true }),

  setActiveDropdown: (dropdownName) => set({ activeDropdown: dropdownName }),
  clearActiveDropdown: () => set({ activeDropdown: null }),
}));
