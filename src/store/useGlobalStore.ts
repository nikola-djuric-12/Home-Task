import { createWithEqualityFn } from "zustand/traditional";
import createSortSlice from "./createSortSlice";
import createFilterSlice from "./createFilterSlice";
import { devtoolsInNonProd } from "@lib/config";
import { GlobalStore } from "@type/globalStore";

const useGlobalStore = createWithEqualityFn<GlobalStore>()(
  devtoolsInNonProd((set) => ({
    ...createSortSlice(set),
    ...createFilterSlice(set),
  }))
);

export default useGlobalStore;
