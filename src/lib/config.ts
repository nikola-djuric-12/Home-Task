import { StateCreator } from "zustand";
import { devtools } from "zustand/middleware";

export const devtoolsInNonProd = (import.meta.env.NODE_ENV === "production"
  ? (fn: StateCreator<any, [["zustand/devtools", never]], []>) => fn
  : devtools) as unknown as typeof devtools;
