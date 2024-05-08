import { useEffect } from "react";
import { useThemeStore } from "./stores/themeStore";
import { RouterProvider } from "react-router-dom";
import router from "./routers";
import ModalContainer from "./components/ModalContainer";
function App() {
  const { mode } = useThemeStore(["mode"]);

  useEffect(() => {
    console.log("mode:", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <div
      style={{
        height: "100dvh",
        backgroundColor: "var(--background)",
      }}
    >
      <RouterProvider router={router} />
      <ModalContainer />
    </div>
  );
}

export default App;
