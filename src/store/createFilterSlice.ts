import { StoreApi } from "zustand";
import { GlobalStore } from "@type/globalStore";
import {
  DeterminationType,
  SeverityType,
  SourceType,
} from "@type/investigations";

const createFilterSlice = (set: StoreApi<GlobalStore>["setState"]) => ({
  filter: {
    source: undefined,
    severity: undefined,
    determination: undefined,
    page: 1,
    id: undefined,
  },
  setSource: (source: SourceType | undefined) => {
    set(({ filter }) => ({
      filter: {
        ...filter,
        source,
      },
    }));
  },
  setSeverity: (severity: SeverityType | undefined) => {
    set(({ filter }) => ({
      filter: {
        ...filter,
        severity,
      },
    }));
  },
  setDetermination: (determination: DeterminationType | undefined) => {
    set(({ filter }) => ({
      filter: {
        ...filter,
        determination,
      },
    }));
  },
  setPage: (page: number) => {
    set(({ filter }) => ({
      filter: {
        ...filter,
        page,
      },
    }));
  },
});

export default createFilterSlice;
