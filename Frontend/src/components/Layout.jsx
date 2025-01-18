import { Outlet } from "react-router"
import HeaderComponent from "../components/header/HeaderComponent";

export default function LayoutParent() {
  return (
    <div>
      <HeaderComponent />
      <Outlet />
    </div>
  );
}