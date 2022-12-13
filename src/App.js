import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import User from "./pages/User";

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
                /sign 
                /user
            */}
            
            <Routes>
              <Route path="/" end element={<Home />} />
                <Route path="/sign" element={<Sign />} />
                <Route path="/user" element={<PrivateRoute />}>
                  <Route path="/user" element={<User />} />
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