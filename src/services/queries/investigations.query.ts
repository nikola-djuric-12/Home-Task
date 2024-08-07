import { useQuery } from "@tanstack/react-query";
import { getInvestigations } from "@services/api/investigations.service";
import { Investigation } from "@type/investigations";
import useGlobalStore from "@store/useGlobalStore";
import { shallow } from "zustand/shallow";
import { sortInvestigations } from "@lib/helpers";

export const useInvestigationsQuery = () => {
  const { filter, sortType } = useGlobalStore(
    (state) => ({
      filter: state.filter,
      sortType: state.sortType,
    }),
    shallow
  );

  const queryKey = ["getInvestigations", filter, sortType];
  return useQuery<Investigation[]>({
    queryKey,
    queryFn: async () => getInvestigations(filter),
    select: (data) => sortInvestigations(data, sortType),
  });
};
