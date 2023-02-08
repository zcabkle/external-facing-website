import React from "react";
import LandingPage from "../pages/landing-page";
import ItemsPage from "../pages/items-page.js";
import FoodbanksPage from "../pages/foodbanks-page";
import FoodbankItemsPage from "../pages/foodbank-items-page";
import { Routes, Route } from "react-router-dom";
import FoodbankParcelsPage from "../pages/foodbank-parcels-page";

function ApplicationRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='foodbanks' element={< FoodbanksPage />} />
            <Route path='items' element={< ItemsPage />} />
            <Route path="items/:id" element={<FoodbankItemsPage/>} />
            <Route path="parcels/:id" element={<FoodbankParcelsPage/>} />
        </Routes>
    )
}

export default ApplicationRouter;