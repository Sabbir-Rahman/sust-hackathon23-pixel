import { Route, Routes } from 'react-router-dom';
import Heatmap from './component/Analytics/heatmap.component';
import Navbar from './component/Navbar/navbar.component';
import Login from './pages/authPages/Login';
import Register from './pages/authPages/Register';
import HomePage from './pages/HomePage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
