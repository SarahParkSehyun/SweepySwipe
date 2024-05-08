import { Outlet, useLocation, useMatches, useParams } from "react-router-dom";
import Header from "./header";
import "./style.scss";

export default function DefaultLayout() {
  const matches = useMatches();
  const match = matches[matches.length - 1];
  //   const handle = match?.handle as {};

  return (
    <div>
      <Header />
      <div className="root-container">
        <Outlet />
      </div>
    </div>
  );
}
