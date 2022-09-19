import { useState } from "react";
import mike from '../img/Mike.jpg'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const history = useNavigate();
    
    setInterval(() => setDate(new Date()), 1000)
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });

    const goHome = () =>{
        history('/')
    }
      
    return (
        <div className="login-page">
            <i className="fa fa-arrow-left"
            onClick={goHome}></i>
            <img src={mike} alt="" />
            <h2>Admin Login Panel</h2>
            
            <input type="text"
            value={name}
            onChange={e=>{setName(e.target.value)}}
            placeholder="Enter username" />

            <input type="text"
            value={name}
            onChange={e=>{setName(e.target.value)}}
            placeholder="Enter password" />

            <button onClick={onsubmit}>Login</button>

            <footer>{time} | Forgot password?</footer>
        </div>
    )
}

export default AdminLogin;