import { useRef, useState } from "react";
import useGlobalStore from "@store/useGlobalStore";
import { shallow } from "zustand/shallow";
import { SortType } from "@type/investigations";
import useOnOutSideClick from "@hooks/useOnOutSideClick";
import DoubleArrow from "@assets/double-arrow.svg";

export const Sort = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const { sortType, setSortType } = useGlobalStore(
    (state) => ({
      sortType: state.sortType,
      setSortType: state.setSortType,
    }),
    shallow
  );

  useOnOutSideClick(dropdownRef, () => setIsOpen(false));

  const handleChange = (value: SortType) => {
    setSortType(value);
    setIsOpen(false);
  };

  return (
    <div
      className="relative md:justify-self-end lg:col-start-5 2xl:col-start-6"
      ref={dropdownRef}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[46px] px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none flex items-center justify-between gap-2"
      >
        <span className="text-gray-500">Sort by</span>
        <img className="w-[18px]" src={DoubleArrow} alt="double-arrow" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full min-w-max mt-1 bg-white border border-gray-300 rounded-lg shadow-lg right-0 left-auto">
          {Object.values(SortType).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => handleChange(type)}
              className={`block w-full px-5 py-2.5 text-gray-700 hover:bg-gray-100 text-left ${sortType === type ? "bg-blue-50" : ""}`}
            >
              {type}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
