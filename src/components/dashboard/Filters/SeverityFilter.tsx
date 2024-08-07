import { useRef, useState } from "react";
import useGlobalStore from "@store/useGlobalStore";
import { shallow } from "zustand/shallow";
import { SeverityType } from "@type/investigations";
import useOnOutSideClick from "@hooks/useOnOutSideClick";
import ChevronUp from "@assets/chevron-up.svg";
import ChevronDwon from "@assets/chevron-down.svg";

export const SeverityFilter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { severityFilter, setSeverity, setPage } = useGlobalStore(
    (state) => ({
      severityFilter: state.filter.severity,
      setSeverity: state.setSeverity,
      setPage: state.setPage,
    }),
    shallow
  );

  useOnOutSideClick(dropdownRef, () => setIsOpen(false));

  const handleChange = (value: SeverityType | "none") => {
    setSeverity(value === "none" ? undefined : value);
    setPage(1);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full h-[46px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none flex items-center justify-between"
      >
        <span
          className={`transition-all duration-300 ${severityFilter || isOpen ? "absolute scale-75 -translate-y-6 -translate-x-4 text-blue-500 bg-white px-2" : "text-gray-500"}`}
        >
          Severity
        </span>
        <span>{severityFilter ? `${severityFilter}` : ""}</span>
        <img
          className="w-4"
          src={isOpen ? ChevronUp : ChevronDwon}
          alt="chevron-up-down"
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
          {Object.values(SeverityType).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleChange(type)}
              className={`block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left ${severityFilter === type ? "bg-blue-50" : ""}`}
            >
              {type}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleChange("none")}
            className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 text-left"
          >
            None
          </button>
        </div>
      )}
    </div>
  );
};
