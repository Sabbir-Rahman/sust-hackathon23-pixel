import { Route, Routes } from "react-router-dom";
import ServiceDetails from "./component/MarketPlace/ServiceDetails";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";

import HomePage from "./pages/HomePage";
import MarketPlace from "./pages/MarketPlace";
import PrivateRoute from "./utils/PrivateRoute";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route path="/market" element={<MarketPlace />} />
        <Route path="/market/:id" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
};

export default App;
