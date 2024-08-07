import { NavBar } from "@components/common/NavBar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="grid grid-rows-[auto,1fr] h-full" data-testid="app-layout">
      <NavBar />
      <Outlet />
    </div>
  );
};
