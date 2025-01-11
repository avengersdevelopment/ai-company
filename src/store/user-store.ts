import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserStore {
  companyName: string;
  setCompanyName: (value: string) => void;
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      companyName: "",
      setCompanyName: (value: string) => set({ companyName: value }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
