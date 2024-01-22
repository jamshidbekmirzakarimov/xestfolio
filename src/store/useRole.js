import { create } from "zustand";

const useRole = create((set) => ({
  role: true,
  changeRole: () => set(() => ({ role: false })),
}));

export default useRole;
