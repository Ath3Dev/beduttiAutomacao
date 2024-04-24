import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Router;