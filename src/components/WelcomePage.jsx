import { useState } from "react";
import mike from '../img/Mike.jpg'
import { Link, useNavigate } from 'react-router-dom'
import Question from "./Question";

const WelcomePage = () => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const navigateTo = useNavigate();
    const [display] = useState(false)
    
    const onsubmit = () => {
        if(!name){
            alert('Enter your name')
        }else{
            alert(name)
            navigateTo('/quize');
        }
    }
    
    setInterval(() => setDate(new Date()), 1000)
    const time = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      });
    return (
        <div className="welcome-page">
            { display && <Question name={name} /> }
            <img src={mike} alt="" />
            <h2>Oladhimeji Quize App</h2>
            <small>Built with React, NodeJs & MongoDB</small>

            <input type="text"
            value={name}
            onChange={e=>setName(e.target.value)}
            placeholder="Enter your name to take quize" />
            <button onClick={onsubmit}>Start Quize</button>

            <footer>{time} | Login to <Link to="/admin-login"> Admin Panel</Link></footer>
        </div>
    )
}

export default WelcomePage;