import Sidebar from "./components/layout/Sidebar";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ display: "flex" }}>

      {/* LEFT SIDEBAR */}
      <Sidebar />

      {/* RIGHT PAGE CONTENT */}
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;