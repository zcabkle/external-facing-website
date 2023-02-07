import React from "react";
import FoodbanksPage from "./FoodbanksPage";
import StockPage from "./StockPage";
import FoodbankPage from "./FoodbankPage";
import ItemPage from "./ItemPage";
import LandingPage from "./LandingPage";
import TestPageFoodbanks from "./TestPageFoodbanks";
import NewItemsPage from "./items-page.js";
import NewFoodbanksPage from "./foodbanks-page";
import { Routes, Route } from "react-router-dom";

//  <Route path="/" element={<Navigate replace to="/foodbanks" />} />

function ApplicationRouter() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="foodbanks" element={<FoodbanksPage />} />
            <Route path="items" element={<StockPage />} />
            <Route path="foodbanks/:id" element={<FoodbankPage />} />
            <Route path="items/:id" element={<ItemPage/>} />
            <Route path='testfoodbanks' element={< NewFoodbanksPage />} />
            <Route path='testitems' element={< NewItemsPage />} />
        </Routes>
    )
}

export default ApplicationRouter;