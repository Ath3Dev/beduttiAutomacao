import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                
            </Routes>
        </BrowserRouter>
    )
}

export default Router;