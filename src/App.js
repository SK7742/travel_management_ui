import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginComponent from './component/LoginComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import RegisterUser from './component/RegisterUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderComponent />
        
        <div className = "container">
        <Routes>
          <Route path="/login" Component={LoginComponent} /> 
          <Route path="/sign-up" Component={RegisterUser} /> 
        </Routes>
        </div>
      </BrowserRouter>
      <FooterComponent />
    </div>  );
}
export default App;
