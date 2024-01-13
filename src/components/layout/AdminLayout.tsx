import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex">
      <div className="flex-[1] bg-purple-500 h-screen">Sidebar</div>
      <div className="flex-[5]">
        <Outlet />
      </div>
    </div>
  );
}
