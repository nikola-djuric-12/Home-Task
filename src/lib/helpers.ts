import { Investigation, SortType } from "@type/investigations";
import { format, parseISO } from "date-fns";

export const sortInvestigations = (
  investigations: Investigation[],
  sortType: SortType
): Investigation[] => {
  switch (sortType) {
    case SortType.NameAsc:
      return investigations.sort((a, b) => a.title.localeCompare(b.title));
    case SortType.NameDesc:
      return investigations.sort((a, b) => b.title.localeCompare(a.title));
    case SortType.AlertFiredAsc:
      return investigations.sort(
        (a, b) =>
          new Date(a.alertFiredTimestamp).getTime() -
          new Date(b.alertFiredTimestamp).getTime()
      );
    case SortType.AlertFiredDesc:
      return investigations.sort(
        (a, b) =>
          new Date(b.alertFiredTimestamp).getTime() -
          new Date(a.alertFiredTimestamp).getTime()
      );
    case SortType.LastUpdatedAsc:
      return investigations.sort(
        (a, b) =>
          new Date(a.lastUpdatedTimestamp).getTime() -
          new Date(b.lastUpdatedTimestamp).getTime()
      );
    case SortType.LastUpdatedDesc:
      return investigations.sort(
        (a, b) =>
          new Date(b.lastUpdatedTimestamp).getTime() -
          new Date(a.lastUpdatedTimestamp).getTime()
      );
    default:
      return investigations;
  }
};

export const formateDate = (date: string) => {
  return format(parseISO(date), "dd-MM-yyyy / HH:mm:ss");
};

export const checkIsServerDown = (error: Error | null) => {
  return error?.message.includes("500") || false;
};
