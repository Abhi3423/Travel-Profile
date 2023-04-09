import { Routes, Route } from "react-router-dom";
import { NoRouteFound } from "./NoRouteFound";
import Home from "../features/Home/home";
import ModeChoice from "../features/ModeChoice/modechoice";

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/mode-choice"
                element={
                    <>
                        <ModeChoice />
                    </>
                }
            />
            <Route path="*" element={<NoRouteFound />} />
        </Routes>
    );
};
export { AppRoute as Routes };
