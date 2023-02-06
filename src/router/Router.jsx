import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Details from "../pages/details/Details";
import Home from "../pages/home/Home";


export function Router () {
        return (
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/details" element={<Details/>} />
                    <Route path="*" element={<h1>Error 404 - Page is not found</h1>} />
                </Routes>
            </BrowserRouter>
        );
}
