import React from "react";
import FoodbanksPage from "./FoodbanksPage";
import StockPage from "./StockPage";
import FoodbankPage from "./FoodbankPage";
import ItemPage from "./ItemPage";
import { Routes, Route, Navigate } from "react-router-dom";

function ApplicationRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/foodbanks" />} />
            <Route path="foodbanks" element={<FoodbanksPage />} />
            <Route path="items" element={<StockPage />} />
            <Route path="foodbanks/:id" element={<FoodbankPage />} />
            <Route path="items/:id" element={<ItemPage/>} />
        </Routes>
    )
}

export default ApplicationRouter;