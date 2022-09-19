// import { Link } from "react-router-dom";
import Question from "./Question";
import useFetch from "./useFetch";

const Home = ({ index })=>{
   const { data: questions, isLoading, error } = 
   useFetch('http://localhost:8000/questions');

    return(
        <div className="home">
            { error && <div> { error } </div> }
            { isLoading && <div>Loading...</div> }
            { questions && <Question
            index = {index}
            questions={questions} /> }
        </div>
    );
}

export default Home;