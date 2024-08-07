import { AppLayout } from "@layout/AppLayout";
import { Dashboard } from "@pages/Dashboard/Dashboard";
import { Error } from "@pages/Error/Error";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="min-h-dvh h-dvh">
      <Routes>
        <Route path="/*" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="server-down" element={<Error />} />
          <Route path="*" element={<Navigate to="dashboard" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
