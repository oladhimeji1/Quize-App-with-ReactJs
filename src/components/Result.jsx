import { Link } from "react-router-dom";
import mike from '../img/Mike.jpg'
import { useNavigate, useParams } from 'react-router-dom';

const Result = ({ name }) =>{
    const { result } = useParams();
    return (
        <div className="result">
            <img src={mike} alt="Emoji" />
            <h2>Congratulations!!!</h2>
            <p>{ name }, You scored </p>
            <h1> { result } </h1>
            <small> <Link to='/'> Go back home</Link></small>
        </div>
    )
}

export default Result;