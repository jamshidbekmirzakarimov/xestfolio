import { status } from "zustand";

const useStatus = create((set) => ({
  isStatus: true,
  changeStatusType: () => set(() => ({ isStatus: false })),
}));

export default useStatus;
