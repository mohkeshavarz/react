import { useEffect, useState } from "react";

export default function Lifecycle (){

    let [count,setCount] = useState(0)

    useEffect(
        () =>{
            let clickHandler = ()=>{
                console.log("روی پنجره کلیک شد")

            }
            window.addEventListener("click",clickHandler)
            return ()=>{
                window.removeEventListener("click",clickHandler)
            }
        }
        ,[]
    )


}