import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Sign from "./pages/Sign";
import User from "./pages/User";

function App() {
    return (
        <>
          {/* navbar */}

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
        </>
    );
}

export default App;