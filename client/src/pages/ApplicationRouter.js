import React from "react";
import LandingPage from "./landing-page";
import ItemsPage from "./items-page.js";
import FoodbanksPage from "./foodbanks-page";
import FoodbankItemsPage from "./foodbank-items-page";
import { Routes, Route } from "react-router-dom";

function ApplicationRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='foodbanks' element={< FoodbanksPage />} />
            <Route path='items' element={< ItemsPage />} />
            <Route path="items/:id" element={<FoodbankItemsPage/>} />
        </Routes>
    )
}

export default ApplicationRouter;