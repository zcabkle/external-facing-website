import React from "react";
import LandingPage from "../pages/landing-page";
import ItemsPage from "../pages/items-page/items-page.js";
import FoodbanksPage from "../pages/foodbanks-page/foodbanks-page";
import FoodbankItemsPage from "../pages/foodbank-items-page/foodbank-items-page";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import FoodbankParcelsPage from "../pages/foodbank-parcels-page/foodbank-parcels-page";
import Navbar from './Navbar';

function ApplicationRouter() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path='foodbanks' element={< FoodbanksPage />} />
                    <Route path='items' element={< ItemsPage />} />
                    <Route path="items/:id" element={<FoodbankItemsPage />} />
                    <Route path="parcels/:id" element={<FoodbankParcelsPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default ApplicationRouter;