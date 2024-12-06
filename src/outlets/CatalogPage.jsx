import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Sidebar from "../components/Sidebar";

function CatalogPage() {
  return (
    <div>
      <div className="mb-4">
        <Breadcrumbs />
      </div>
      <div className="grid gap-4 md:grid-cols-8">
        <div className="hidden md:block md:col-span-2">
          <Sidebar />
        </div>
        <div className="md:col-span-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CatalogPage;
