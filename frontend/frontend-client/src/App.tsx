import { Route, Routes } from "react-router-dom";
import Heatmap from "./component/Analytics/heatmap.component";
import ServiceDetails from "./component/MarketPlace/ServiceDetails";
import Login from "./pages/authPages/Login";
import Register from "./pages/authPages/Register";
import HomePage from "./pages/HomePage";
import MarketPlace from "./pages/MarketPlace";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/market" element={<MarketPlace />} />
        <Route path="/market/:id" element={<ServiceDetails />} />
      </Routes>
    </div>
  );
};

export default App;
