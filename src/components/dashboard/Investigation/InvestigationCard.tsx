import {
  DeterminationBackground,
  SeverityBackground,
  SourceIcon,
} from "@lib/constants";
import { Investigation, ReadyForReviewType } from "@type/investigations";
import { formateDate } from "@lib/helpers";
import UserIcon from "@assets/user.svg";
import DateAlertIcon from "@assets/date-alert.svg";
import DateUpdateIcon from "@assets/date-update.svg";
import GreenCheck from "@assets/green-check.svg";

interface InvestigationCardProps {
  investigation: Investigation;
}

export const InvestigationCard = ({
  investigation,
}: InvestigationCardProps) => {
  const {
    id,
    title,
    source,
    alertFiredTimestamp,
    lastUpdatedTimestamp,
    severity,
    analystAssigned,
    determination,
    readyForReview,
  } = investigation;

  return (
    <div key={id} className="flex flex-col shadow-card-shadow rounded-xl">
      <div
        className={`rounded-t-xl p-1.5 ${SeverityBackground[severity]}`}
      ></div>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-base sm:text-lg font-medium">{title}</p>

        <div className="my-1 border-b-2 border-gray-200"></div>

        <div className="flex items-center gap-4">
          <img src={UserIcon} alt="user-icon" className="w-8" />
          <p>{analystAssigned}</p>
          {readyForReview === ReadyForReviewType.Yes ? (
            <img
              src={GreenCheck}
              alt="ready-for-review"
              className="w-5 ml-auto"
            />
          ) : null}
        </div>

        <div className="my-1 border-b-2 border-gray-200"></div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img src={DateAlertIcon} alt="user-icon" className="w-8" />
            <p>{formateDate(alertFiredTimestamp)}</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={DateUpdateIcon} alt="user-icon" className="w-8" />
            <p>{formateDate(lastUpdatedTimestamp)}</p>
          </div>
        </div>
        <div className="my-1 border-b-2 border-gray-200"></div>

        <div className="flex items-center justify-between">
          <p
            className={`px-3 py-1 rounded-2xl text-black text-sm font-medium ${DeterminationBackground[determination]}`}
          >
            {determination}
          </p>
          <img src={SourceIcon[source]} alt={source} className="w-12" />
        </div>
      </div>
    </div>
  );
};
