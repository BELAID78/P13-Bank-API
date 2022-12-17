import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import './app.css';
import Footer from "./components/Footer/Footer";
import React from "react";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

function App() {
  
    const isLoggedIn = useSelector(state => state.user.authenticated)

    return (
        <>
          <BrowserRouter>

            {/* navbar */}
            <NavBar isLoggedIn={isLoggedIn} />

            {/* 
              routes
                /
                /login 
                /profile
            */}
            
            <Routes>
              <Route path="/" end element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<PrivateRoute />}>
                  <Route path="/profile" element={<Profile />} />
                </Route>
              <Route path="/error" element={<Error />} />
              <Route path="/*"  element={<Error />} />
            </Routes>

            {/* footer */}
            <Footer />
          </BrowserRouter>
        </>
    );
}

export default App;