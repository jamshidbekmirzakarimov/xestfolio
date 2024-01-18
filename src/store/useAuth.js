import { create } from "zustand";

const useAuth = create((set) => ({
  isAdmin: false,
  changeAdminType: () => set(() => ({ isAdmin: true })),
}));

export default useAuth;
