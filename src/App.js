import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import User from "./pages/User";

import './app.css';
import Footer from "./components/Footer/Footer";
import React from "react";
import { useSelector } from "react-redux";

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
                /sign 
                /user
            */}
            
            <Routes>
              <Route path="/" end element={<Home />} />
              <Route path="/sign" end element={<Sign />} />
              <Route path="/user" end element={<User />} />
              <Route path="/error" end element={<Error />} />
              <Route path="/*" end element={<Error />} />
            </Routes>
            

            {/* outlet */}
            <Outlet />

            {/* footer */}
            <Footer />
          </BrowserRouter>
        </>
    );
}

export default App;