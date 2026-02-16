export default function Test2(){
    let fruits = ["apple","banana","orange","mango"]

    return(
        <ul>
            {
                fruits.map(
                    (fruit) => <li>{fruit}</li>
                )
            }
        </ul>
    )
}

