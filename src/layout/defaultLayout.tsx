import { Outlet, useLocation, useMatches, useParams } from "react-router-dom";

export default function DefaultLayout() {
  const matches = useMatches();
  const match = matches[matches.length - 1];
  //   const handle = match?.handle as {};

  return (
    <div>
      <Outlet />
    </div>
  );
}
