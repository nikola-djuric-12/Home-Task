import useGlobalStore from "@store/useGlobalStore";
import { shallow } from "zustand/shallow";
import { maxPages } from "@lib/constants";
import ChevronUp from "@assets/chevron-up.svg";

export const Pagination = () => {
  const { page, setPage } = useGlobalStore(
    (state) => ({
      page: state.filter.page,
      setPage: state.setPage,
    }),
    shallow
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= maxPages) {
      setPage(page);
    }
  };

  return (
    <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-4 pt-4 mt-auto border-t-2 border-gray-200">
      <button
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 1}
        className="p-2 rounded-lg disabled:opacity-50"
      >
        <img src={ChevronUp} alt="previous-page" className="-rotate-90 w-5" />
      </button>
      <div className="flex items-center gap-3">
        {[...Array(maxPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 rounded-full ${
              page === index + 1 ? "bg-blue-400 text-white" : "bg-gray-100"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={() => handlePageChange(page + 1)}
        disabled={page === maxPages}
        className="p-2  rounded-lg disabled:opacity-50"
      >
        <img src={ChevronUp} alt="next-page" className="rotate-90" />
      </button>
    </div>
  );
};
