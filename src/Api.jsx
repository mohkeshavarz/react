import { useEffect, useState } from "react"

export default function Api(){

    //https://jsonplaceholder.typicode.com/posts
    let [posts,setPost] = useState([])
    useEffect(
        () => {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then( response => response.json())
            .then( data =>setPost(data))
            .catch( error => console.log(error))
        }
        , []
    )

    if(posts.length==0){
        return <h2>داده های در حال بارگزاری هستند</h2>
    }

    return(
        <div>
        <h1>لیست پست ها</h1>
        <ul>
            {
                posts.map(
                    (item) => <li key={item.id}>{item.title}</li>
                )
            }
        </ul>


        </div>
    )
}