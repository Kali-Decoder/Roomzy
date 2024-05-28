import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";

import Reviews from "./pages/reviews";
import PageNotFound from "./pages/notFound";
import AddRoomAvail from "./pages/add-room-avail";
import "./output.css";
import RegisterUser from "./pages/register-user";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/add-room-avail" element={<AddRoomAvail />} />
        <Route path="/register-user" element={<RegisterUser />} />
      </Routes>
    </Router>
  );
}
