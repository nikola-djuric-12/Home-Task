import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "../App";

const queryClient = new QueryClient();

describe("AppLayout", () => {
  it("should render AppLayout with NavBar and Outlet", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    expect(screen.getByTestId("app-layout")).toBeInTheDocument();
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });
});
