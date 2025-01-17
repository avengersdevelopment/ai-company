import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  companyName: string;
  dateAccess: string;
  setCompanyName: (value: string) => void;
  setDateAccess: (value: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      companyName: "",
      dateAccess: "",
      setCompanyName: (value: string) => set({ companyName: value }),
      setDateAccess: (value: string) => set({ dateAccess: value }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
