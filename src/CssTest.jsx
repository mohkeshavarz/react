
//import './CssTest.css'
import styles from "./CssTest.module.css"
export default function CssTest(){
    return(
        <div className={styles.container}> 
            <h1 className={styles.title}>ZoodCom</h1>
        </div>
    )
}