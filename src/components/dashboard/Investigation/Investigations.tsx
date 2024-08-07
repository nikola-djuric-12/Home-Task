import { useNavigate } from "react-router-dom";
import { useInvestigationsQuery } from "@services/queries/investigations.query";
import { InvestigationCard } from "./InvestigationCard";
import { EmptyInvestigations } from "./EmptyInvestigations";
import { Spinner } from "@components/common/Spinner";
import { checkIsServerDown } from "@lib/helpers";

export const Investigations = () => {
  const { data, isLoading, isError, error } = useInvestigationsQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <Spinner />;
  }

  if (data && data?.length === 0) {
    return <EmptyInvestigations />;
  }

  if (isError && checkIsServerDown(error)) {
    navigate("/server-down");
    return <div></div>;
  }

  return (
    <div className="overflow-y-auto my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-4 pb-1 px-0.5">
        {data?.map((investigation) => (
          <InvestigationCard
            key={investigation.id}
            investigation={investigation}
          />
        ))}
      </div>
    </div>
  );
};
