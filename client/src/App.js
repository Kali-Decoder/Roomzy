import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main";
import Reviews from "./pages/reviews";
import PageNotFound from "./pages/notFound";
import AddRoomAvail from "./components/AddRoomAvailModal";
import "./output.css";
import RegisterUser from "./pages/register-user";
import Questionaries from "./components/FindRoomModal";
import RecommendedUsers from "./pages/recommended-users";
import LoginUser from "./pages/login";
import ListEvents from "./pages/list-events";
import ProfilePage from "./pages/profile";
import ListingDetails from "./pages/listing-details";
import Bill from "./components/billing/Bill";
import TopNavbar from "./components/navbar/topNavbar";
import Protected from "./components/Protected";
import SingleEvent from "./pages/single-page-event";


export default function App() {
  return (
    <Router>
       <TopNavbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/review" element={<Protected Component={Reviews} />} />
        <Route path="*" element={<PageNotFound />} />
     
        <Route path="/register-user" element={<RegisterUser />} />
        <Route path="/generate-list" element={< Protected Component={RecommendedUsers} title={"Listed Users"} />} />  
        <Route path="/listed-rooms" element={<Protected Component={RecommendedUsers} title="Listed Rooms" />} />
        <Route path="/login" element={<LoginUser />} />  
        <Route path="/events" element={<Protected Component={ListEvents} />} />
        <Route path="/profile" element={<Protected Component={ProfilePage} />} />
        <Route path="/listing-details/:userId" element={<Protected Component={ListingDetails} />} />
        <Route path="/billing" element={<Protected Component={Bill}/>} />
        <Route path="/single-page-event" element={<SingleEvent/>} />
      </Routes>
    </Router>
  );
}
