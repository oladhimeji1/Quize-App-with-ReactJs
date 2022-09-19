import { Link } from "react-router-dom";
import mike from '../img/Mike.jpg'

const Result = ({ res, name }) =>{
    return (
        <div className="result">
            <img src={mike} alt="Emoji" />
            <h2>Congratulations!!!</h2>
            <p>{ name }</p>
            <h1> { res } </h1>
            <small> <Link to='/'> Go back home</Link></small>
        </div>
    )
}

export default Result;