import { api } from "@lib/api";
import { GetInvestigationsProps, Investigation } from "@type/investigations";

export const getInvestigations = async (
  params: GetInvestigationsProps
): Promise<Investigation[]> => {
  const { source, severity, determination, page, id } = params;
  const { data } = await api.get<Investigation[]>("investigations", {
    params: {
      id,
      source,
      severity,
      determination,
      page,
    },
  });

  return data;
};
