import { useState } from "react"
import Header from "./Header"

const Question = ({ questions }) => {

    const [index, setIndex] = useState(0)
    const [num, setNum] = useState(1)
    const [toggle, setToggle] = useState(true)
    const [toggleButton, setToggleButton] = useState(true)
    const [result, setResult] = useState(true)
    const [res, setRes] = useState(0)
    const [score, setScore] = useState(Array(questions.length).fill(0));

    var a;
    var addArr = (e) =>{
        if(e.target.value === questions[index].answer){
            a = 1;
        }
        else{
            a = 0;
        }
        // console.log(a)
    }

    var goForward = () =>{
        // Updating the score in the array
        const arrX = [...score];
        arrX[index] = a
        setScore(arrX)
        // Incrementing/Moving to the nex question
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
            setResult(false)
            setRes(b)
    console.log(b);
    }
    // console.log(a);
    // console.log(score);
    
    return(
        <>
            <Header icon={ !toggle ? <i onClick={goBack}
            className="fa icon fa-arrow-left"></i> : '' } num = {num} />

            <hr /> 

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

            { !result && <div className="result">
                <h2>Congratulations!!!</h2>
                <p>You scored {res}</p>
            </div>}
        </>
    )
}

export default Question