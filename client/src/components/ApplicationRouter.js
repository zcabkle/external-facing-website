import React from "react";
import Foodbanks from "./Foodbanks";
import Items from "./Items";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppBar from "./AppBar";

function ApplicationRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/foodbanks" />} />
            <Route path="foodbanks" element={<Foodbanks />} />
            <Route path="items" element={<Items />} />
        </Routes>
    )
}

export default ApplicationRouter;