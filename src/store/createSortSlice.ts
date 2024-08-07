import { StoreApi } from "zustand";
import { GlobalStore } from "@type/globalStore";
import { SortType } from "@type/investigations";

const createSortSlice = (set: StoreApi<GlobalStore>["setState"]) => ({
  sortType: SortType.NameAsc,
  setSortType: (sortType: SortType) => {
    set(() => ({ sortType }));
  },
});

export default createSortSlice;
