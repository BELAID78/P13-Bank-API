import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import User from "./pages/User";

import './app.css';
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
          {/* navbar */}
          <NavBar />

          {/* 
            routes
              /
              /sign 
              /user
          */}
          <BrowserRouter>
            <Routes>
              <Route path="/" end element={<Home />} />
              <Route path="/sign" end element={<Sign />} />
              <Route path="/user" end element={<User />} />
              <Route path="/error" end element={<Error />} />
            </Routes>
          </BrowserRouter>

          {/* outlet */}
          <Outlet />

          {/* footer */}
          <Footer />
        </>
    );
}

export default App;