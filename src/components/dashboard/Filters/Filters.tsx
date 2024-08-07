import { DeterminationFilter } from "./DeterminationFilter";
import { SeverityFilter } from "./SeverityFilter";
import { Sort } from "./Sort";
import { SourceFilter } from "./SourceFilter";

export const Filters = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 2xl:grid-cols-6 gap-4 flex-1">
      <SourceFilter />
      <SeverityFilter />
      <DeterminationFilter />
      <Sort />
    </div>
  );
};
