import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginComponent from './component/LoginComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import RegisterUser from './component/RegisterUser';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className = "container">
          <Routes> 
            <Route path="/login" element={<LoginComponent />} /> 
            <Route path="/sign-up" element={<RegisterUser />} />
            <Route path="/home" element={<RegisterUser />} /> 
          </Routes>
        </div>
      </Router>
      <FooterComponent />
    </div>  );
}
export default App;
