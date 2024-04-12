import { useShallow } from "@/hooks/useShallow";
import { Nullable } from "@/types/common";
import { StateCreator } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

type AuthStoreType = {
  accessToken: Nullable<string>;
  refreshToken: Nullable<string>;
  setAuth: (accessToken: string, refreshToken: string) => void;
  clear: () => void;
};

type PersistAuthStoreType = (
  config: StateCreator<AuthStoreType>,
  options: PersistOptions<AuthStoreType>
) => StateCreator<AuthStoreType>;

const store = createWithEqualityFn<AuthStoreType>(
  (persist as PersistAuthStoreType)(
    (set) => ({
      accessToken: null,
      refreshToken: null,

      setAuth: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      clear: () => set({ accessToken: null, refreshToken: null }),
    }),

    {
      name: "boiler-plage-front-auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useAuthStore = <T extends keyof AuthStoreType>(keys: T[]) => {
  return useShallow(store, keys);
};
