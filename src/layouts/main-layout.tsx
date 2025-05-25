import Header from "../components/header";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Header />
      <div className={"px-28"}>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
