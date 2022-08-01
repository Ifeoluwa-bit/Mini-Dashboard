
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<Register />} />
          <Route path='login' element={<Login />} />
          <Route path='dashboard' element={<Dashboard />} />
        </Routes>
      
      
    </BrowserRouter>
  );
}

export default App;
