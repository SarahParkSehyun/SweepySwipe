import { useShallow } from "@/hooks/useShallow";
import { StateCreator } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

type ThemeMode = "light" | "dark";
type ThemeStoreType = {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

type PersistThemeStoreType = (
  config: StateCreator<ThemeStoreType>,
  options: PersistOptions<ThemeStoreType>
) => StateCreator<ThemeStoreType>;

const store = createWithEqualityFn<ThemeStoreType>(
  (persist as PersistThemeStoreType)(
    (set) => ({
      mode: "light",
      setMode: (mode) => set({ mode }),
    }),

    {
      name: "boiler-plage-front-theme",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useThemeStore = <T extends keyof ThemeStoreType>(keys: T[]) => {
  return useShallow(store, keys);
};
