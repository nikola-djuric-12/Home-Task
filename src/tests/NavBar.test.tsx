import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "../App";

const queryClient = new QueryClient();

describe("NavBar", () => {
  it("should render NavBar", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText(/Home Excercise/i)).toBeInTheDocument();
  });

  it("should navigate to /dashboard when the logo is clicked", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/server-down"]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByText(/Home Excercise/i)).toBeInTheDocument();

    const homeButton = screen.getByRole("button", { name: /Home Excercise/i });
    fireEvent.click(homeButton);

    await waitFor(() =>
      expect(screen.getByTestId(/dashboard/i)).toBeInTheDocument()
    );
  });
});
