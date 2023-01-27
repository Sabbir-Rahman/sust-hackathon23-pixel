import { Route, Routes } from 'react-router-dom';
import Heatmap from './component/Analytics/heatmap.component';
import Login from './pages/authPages/Login';
import Register from './pages/authPages/Register';
import HomePage from './pages/HomePage';
import SubscriptionPage from './pages/SubscriptionPage';
import MarketPlace from './pages/MarketPlace';
import ServiceDetails from './component/MarketPlace/ServiceDetails';
import SellerSignUp from './pages/SellerAuthPages/SellerSignup';
import SellerRegister from './pages/SellerAuthPages/SellerRegister';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/market' element={<MarketPlace />} />
        <Route path='/market/:id' element={<ServiceDetails />} />
        <Route path='/subscription-page' element={<SubscriptionPage />} />
        <Route path='/seller-signup' element={<SellerSignUp />} />
        <Route path='/seller-signin' element={<SellerRegister />} />
      </Routes>
    </div>
  );
};

export default App;
