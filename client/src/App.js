import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";

import Reviews from "./pages/reviews";
import PageNotFound from "./pages/notFound";
import AddRoomAvail from "./pages/add-room-avail";
import "./output.css";
import RegisterUser from "./pages/register-user";
import Questionaries from "./pages/preference";
import RecommendedUsers from "./pages/recommended-users";
import LoginUser from "./pages/login";
import ListEvents from "./pages/list-events";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/add-room-avail" element={<AddRoomAvail />} />
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/questions" element={<Questionaries />} />
        <Route path="/generate-list" element={<RecommendedUsers />} />  
        <Route path="/login" element={<LoginUser />} />  
        <Route path="/events" element={<ListEvents />} />
      </Routes>
    </Router>
  );
}
