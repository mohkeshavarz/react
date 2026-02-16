import { useState } from "react"

export default function ChangeColor(){

    function changeHandler(event){
        setBg(event.target.value)
    }

    let [bg,setBg] = useState("red")

    let divStyles={
        width:"100px",
        height:"100px",
        backgroundColor: bg

    }
    return(
        <div>
            <hi>رنگ را انتخاب کنید</hi>
            <select onChange={changeHandler}> 
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
                <option value="yellow">yellow</option>
            </select>

            <div style={divStyles}>

            </div>
        </div>
    )
}