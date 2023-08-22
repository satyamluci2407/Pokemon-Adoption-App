import { useCallback } from "react";
import { Outlet, ScrollRestoration, useBeforeUnload } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationMenu from "../components/NavigationMenu";

export default function Root () {

  const userState = useSelector(state => state.user);

  useBeforeUnload(
    useCallback(() => {
      sessionStorage.setItem('userSession', JSON.stringify(userState));
    }, [userState])
  )

  return (
    <>
      <NavigationMenu />
      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
}
