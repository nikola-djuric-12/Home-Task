import { Filters } from "@components/dashboard/Filters/Filters";
import { Investigations } from "@components/dashboard/Investigation/Investigations";
import { Pagination } from "@components/dashboard/Pagination/Pagination";

export const Dashboard = () => {
  return (
    <div
      className="grid grid-rows-[auto,1fr,auto] h-full p-4 min-h-0"
      data-testid="dashboard"
    >
      <Filters />
      <Investigations />
      <Pagination />
    </div>
  );
};
