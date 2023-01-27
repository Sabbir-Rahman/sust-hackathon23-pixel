import { Route, Routes } from 'react-router-dom';
import Heatmap from './component/Analytics/heatmap.component';
import Login from './pages/authPages/Login';
import Register from './pages/authPages/Register';
import HomePage from './pages/HomePage';
import SubscriptionPage from './pages/SubscriptionPage';
import MarketPlace from './pages/MarketPlace';
import ServiceDetails from './component/MarketPlace/ServiceDetails';
import PrivateRoute from './utils/PrivateRoute';

const App = () => {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route
          path='/market'
          element={
            <PrivateRoute>
              <MarketPlace />
            </PrivateRoute>
          }
        />
        <Route
          path='/market/:id'
          element={
            <PrivateRoute>
              <ServiceDetails />
            </PrivateRoute>
          }
        />
        <Route
          path='/subscription'
          element={
            <PrivateRoute>
              <SubscriptionPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
