// import { Link } from "react-router-dom";
import Question from "./Question";
import useFetch from "./useFetch";

const Home = async () =>{
   const { data: questions, isLoading, error } = useFetch('https://paper-grizzly-millennium.glitch.me/db.json');
    console.log(data);
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