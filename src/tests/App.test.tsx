import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "../App";

const queryClient = new QueryClient();

describe("App", () => {
  it("should render Dashboard on default route", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/"]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId(/dashboard/i)).toBeInTheDocument()
    );
  });

  it("should render Error page on /server-down route", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/server-down"]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId(/server-down/i)).toBeInTheDocument()
    );
  });

  it("should redirect from unknown route to Dashboard", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={["/unknown-route"]}>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    );

    await waitFor(() =>
      expect(screen.getByTestId(/dashboard/i)).toBeInTheDocument()
    );
  });
});
