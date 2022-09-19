
import Footer from './components/Footer';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import './fonts/font-awesome.css'
import AdminLogin from './components/AdminLogin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './components/Result';

function App() {
 
  return (
    
    <Router>
      <div className="content">
          <Routes>
            <Route element={ <WelcomePage /> } exact path="/" />
            <Route element={ <AdminLogin /> } path="/admin-login" />
            <Route element={ <Home /> } path="/quize" />
            <Route element={ <Result /> } path="/result" />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
