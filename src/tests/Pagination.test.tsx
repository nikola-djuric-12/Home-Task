import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import useGlobalStore from "@store/useGlobalStore";
import { maxPages } from "@lib/constants";
import { Pagination } from "@components/dashboard/Pagination/Pagination";

const mockSetPage = vi.fn();

vi.mock("@store/useGlobalStore", () => ({
  __esModule: true,
  default: vi.fn(),
}));

describe("Pagination Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render pagination buttons", () => {
    (useGlobalStore as any).mockReturnValue({
      page: 1,
      setPage: mockSetPage,
    });
    render(<Pagination />);
    expect(screen.getByAltText("previous-page")).toBeInTheDocument();
    expect(screen.getByAltText("next-page")).toBeInTheDocument();
    expect(screen.getAllByRole("button").length).toBe(maxPages + 2); // number buttons + prev + next
  });

  it("should disable previous button on first page", () => {
    (useGlobalStore as any).mockReturnValue({
      page: 1,
      setPage: mockSetPage,
    });
    render(<Pagination />);
    const prevButton = screen.getByRole("button", { name: /previous-page/i });
    expect(prevButton).toBeDisabled();
  });

  it("should disable next button on last page", () => {
    (useGlobalStore as any).mockReturnValue({
      page: maxPages,
      setPage: mockSetPage,
    });
    render(<Pagination />);
    const nextButton = screen.getByRole("button", { name: /next-page/i });
    expect(nextButton).toBeDisabled();
  });

  it("should call setPage when a page button is clicked", () => {
    (useGlobalStore as any).mockReturnValue({
      page: 1,
      setPage: mockSetPage,
    });
    render(<Pagination />);
    fireEvent.click(screen.getByText("2"));
    expect(mockSetPage).toHaveBeenCalledWith(2);
  });

  it("should not call setPage if trying to go beyond bounds", () => {
    (useGlobalStore as any).mockReturnValue({
      page: 1,
      setPage: mockSetPage,
    });
    render(<Pagination />);
    const prevButton = screen.getByRole("button", { name: /previous-page/i });
    fireEvent.click(prevButton);
    expect(mockSetPage).not.toHaveBeenCalled();
  });
});
