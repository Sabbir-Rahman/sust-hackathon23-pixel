import { Route, Routes } from 'react-router-dom';
import Heatmap from './component/Analytics/heatmap.component';
import Login from './pages/authPages/Login';
import Register from './pages/authPages/Register';
import HomePage from './pages/HomePage';
import SubscriptionPage from './pages/SubscriptionPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/subscription-page' element={<SubscriptionPage />} />
      </Routes>
    </div>
  );
};

export default App;
