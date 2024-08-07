import { Dispatch } from "react";
import {
  DeterminationType,
  GetInvestigationsProps,
  SeverityType,
  SortType,
  SourceType,
} from "./investigations";

export interface SortSlice {
  sortType: SortType;
  setSortType: Dispatch<SortType>;
}
export interface FilterSlice {
  filter: GetInvestigationsProps;
  setSource: Dispatch<SourceType | undefined>;
  setSeverity: Dispatch<SeverityType | undefined>;
  setDetermination: Dispatch<DeterminationType | undefined>;
  setPage: Dispatch<number>;
}

export type GlobalStore = SortSlice & FilterSlice;
