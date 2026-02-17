import { useState } from "react"

export default function Todolist(){
    // let todos =["breakfast","gym","study"]

    let [todos,setTodo] = useState([])

    function clickHandler(){
        let inputElement = document.getElementById("todoInput")
        let newTodo = inputElement.value
        //setTodo([...todos,newTodo])
        setTodo(todos.concat(newTodo))
        inputElement.value = ""

    }


    return(
        <div>
            <h2> لیست کارهای روزانه</h2>
            <input
            type="text"
            placeholder="تودوی خود را وارد کنید"
            id="todoInput" />

            <button onClick={clickHandler}>اضافه کنید</button>

            <ul>
                {
                    todos.map(
                        (todo,index) => <li key={index}>{todo}</li>
                    )

                }
            </ul>
            
            


        </div>
    )

}