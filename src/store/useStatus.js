import { status } from "zustand";

const useStatus = status((set) => ({
  isStatus: true,
  changeStatusType: () => set(() => ({ isStatus: false })),
}));

export default useStatus;
