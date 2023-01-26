import React from "react";
import FoodbanksPage from "./FoodbanksPage";
import StockPage from "./StockPage";
import FoodbankPage from "./FoodbankPage";
import { Routes, Route, Navigate } from "react-router-dom";

function ApplicationRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/foodbanks" />} />
            <Route path="foodbanks" element={<FoodbanksPage />} />
            <Route path="items" element={<StockPage />} />
            <Route path="foodbanks/:id" element={<FoodbankPage />} />
            <Route path="items/:id" />
        </Routes>
    )
}

export default ApplicationRouter;