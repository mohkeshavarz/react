import { useState } from "react"

export default function Test(){
    let [counter,setCounter] = useState(0)
    function clickHandler(){
        console.log("Clicked")
        setCounter(counter+=5)
    }
    return(
        <div>
            <h1>the value of counter is : {counter} </h1>
            <button onClick={clickHandler}>click Me</button>
        </div>
     
    )
}