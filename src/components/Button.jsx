import { useState } from "react"

const Button = ({count, setCount}) => {

return (
    <div 
    className='button'
    onClick={()=>{
        setCount(count + 1)
    }}>
            Next Question
    </div>
    
    
    // >Next Question</button>
)
}

export default Button