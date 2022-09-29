import { useState } from "react";
import mike from '../img/Mike.jpg'
import { Link, useNavigate } from 'react-router-dom'

const WelcomePage = ({onAdd}) => {
    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [display, setDisplay] = useState(false)
    const navigateTo = useNavigate();
    
    const onsubmit = async () => {
        if(!name){
            alert('Enter your name')
        }else{
            const data = { name };
            const respones = await fetch('https://paper-grizzly-millennium.glitch.me/record.json', 
                { mode: 'cors' }, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })
            const res = await respones.json()
            const id = res.id
            const namex = res.name
            onAdd({id, namex})
            navigateTo(`/quize`);
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