import { create } from "zustand";

const useRole = create((set) => ({
  role: false,
  changeRole: () => set(() => ({ role: true })),
}));

export default useRole;
