// import { Link } from "react-router-dom";
import Question from "./Question";
import useFetch from "./useFetch";

const Home = async ({ id })=>{
   const { data: questions, isLoading, error } = await useFetch('https://cors-anywhere.herokuapp.com/https://paper-grizzly-millennium.glitch.me/db.json');

    return(
        <div className="home">
            { error && <div> { error } </div> }
            { isLoading && <div>Loading...</div> }
            { questions && <Question id={id}
            questions={questions}  /> }
        </div>
    );
}

export default Home;