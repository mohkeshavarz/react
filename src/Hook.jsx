import { useEffect, useState } from "react"

export default function Hook(){

    let [count,setCount] = useState(0)
//change title
    useEffect(
        ()=> {document.title = count}
        , [count]
    )
//save in local storage
    useEffect(
        () => {localStorage.setItem("count",count)}
        , [count]
    )
    return(
        <div>
            <button onClick={ ()=> setCount(count+1)}>Click to + </button>
            <button onClick={ ()=> setCount(count-1)}>Click to - </button>
            <button onClick={ ()=> setCount(0)}>Click to 0 </button>
            <h1>You Clicked {count} Times </h1>


        </div>
    )

}