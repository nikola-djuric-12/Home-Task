import DataEmpty from "@assets/data-empty.svg";

export const EmptyInvestigations = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-10 text-center">
      <img src={DataEmpty} alt="no-data" className="w-[200px]" />
      <p>
        Based on the filters you selected, there is no data to show. Please
        adjust the filters.
      </p>
    </div>
  );
};
