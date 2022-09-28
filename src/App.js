
import Footer from './components/Footer';
import Home from './components/Home';
import WelcomePage from './components/WelcomePage';
import './fonts/font-awesome.css'
import AdminLogin from './components/AdminLogin'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Result from './components/Result';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('')

  const onAdd = (data) =>{
    // console.log(data)
    setName(data.namex)
    setId(data.id)
    // console.log(name);
  }
 
  // console.log(name);
 
  return (
    
    <Router>
      
      <div className="content">
        
          <Routes>
            <Route element={ <WelcomePage onAdd={onAdd}/> } exact path="/" />
            <Route element={ <AdminLogin /> } path="/admin-login" />
            <Route element={ <Home id={id} /> } path="/quize" />
            <Route element={ <Result name={name} /> } path="/result/:result" />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
