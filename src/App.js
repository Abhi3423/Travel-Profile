import { Routes } from "./routes/AppRoute";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const App = () => {

  const location = useLocation();

  const routeTitles = {
    "/": "Respondent Travel profile",
    "/mode-choice": "Mode choice",
    "/another-route": "Another Route Title"
  };

  useEffect(() => {
    document.title = routeTitles[location.pathname];
  }, [location]);

  return (
    <div className="block box-border">
      <Routes />
    </div>
  )
}

export default App
