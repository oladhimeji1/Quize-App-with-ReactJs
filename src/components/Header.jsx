import { useEffect, useState } from "react";

const Header = ({ num, icon, index }) => {

  // Date & seDate Hook
    const [date, setDate] = useState(new Date());
    useEffect(() =>{
        setInterval(() => setDate(new Date()), 1000)
    }, []);

    
        
    return (
        <div className="quest-title">
          { icon }
          <p>Question { num }</p>
          <p>{date.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: false
          })}</p>
        </div>
    )
}

export default Header;