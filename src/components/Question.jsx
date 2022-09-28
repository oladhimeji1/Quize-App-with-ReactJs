import { useState } from "react"
import Footer from "./Footer"
import Header from "./Header"
// import Result from "./Result"
import { Link, useNavigate } from 'react-router-dom'

const Question = ({ questions, id }) => {

    const [index, setIndex] = useState(0)
    const [num, setNum] = useState(1)
    const [toggle, setToggle] = useState(true)
    const [toggleButton, setToggleButton] = useState(true)
    // const [result, setResult] = useState(true)
    const [res, setRes] = useState(0)
    const [score, setScore] = useState(Array(questions.length).fill(0));
    const navigateTo = useNavigate();

    var a = 0;
    var addArr = (e) =>{
        if(e.target.value === questions[index].answer){

            // Updating the score in the array
            const arrX = [...score]; //all the data in the array
            arrX[index] = 1 //update the index of the question in the array by 1
            setScore(arrX)
        }
        else{
        // Updating the score in the array
            const arrX = [...score]; //all the data in the array
            arrX[index] = 0
            setScore(arrX)
        }
    }

    var goForward = () =>{

        // Incrementing/Moving to the next question
        if(index === questions.length - 1){
            setIndex(index)
            setToggleButton(false)
        }else{
            setIndex(index + 1)
            setNum(num + 1)
            setToggle(false)
        }
    }
    const goBack = () => {
        if(index === 0){
            setIndex(index)
            setToggle(true)
        }else{
            setIndex(index - 1)
            setNum(num - 1)
            setToggleButton(true)
        }
    }
    var b = 0;
    const onSubmit = () => {
        for(var i=0; i<questions.length; i++){
            b += score[i];
        }
        // setResult(false)
        setRes(b)
        navigateTo(`/result/${b}`);
        // console.log(b);
    }
    
    return(
        <>
            <Header icon={ !toggle ? <i onClick={goBack}
            className="fa icon fa-arrow-left"></i> : '' } num = {num} />

            <hr /> 
            <p>{score} | {questions.length}</p>
            {questions &&  
            <div key={ questions.id } className='question'>
                { questions[index].title }
            </div> 
            }

            <div key={ questions.id } onClick={addArr} className='option'>
                <input className='hidden-input' type="radio" name="x" value={questions[index].A} onClick={addArr} />
                { questions[index].A }
            </div>
            
            <div key={ questions.id } onClick={addArr} className='option'>
                <input className='hidden-input' type="radio" name="x" value={questions[index].B} onClick={addArr} />
                { questions[index].B }
            </div>
                
            <div key={ questions.id } onClick={addArr} value="ola" className='option'>
                <input className="hidden-input" type="radio" name="x" value={questions[index].correctC} onClick={addArr} />
                { questions[index].C }
            </div>

            <div key={ questions.id } onClick={addArr} className='option'>
                <input className="hidden-input" type="radio" name="x" value={questions[index].correctD} onClick={addArr} />
                { questions[index].D }
            </div>
            
           
            { toggleButton && <div className='button' onClick={goForward}> Next Question</div>}
            { !toggleButton && <div className='button' onClick={onSubmit}> Submit </div>}
            
            <Footer />
        </>
    )
}

export default Question