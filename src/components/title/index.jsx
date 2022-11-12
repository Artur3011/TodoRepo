import {useState} from "react"
import style from "./style.module.scss"
import {data} from "../../store/data"
console.log(data);



const Title = ({children})=>{
    // const[text,setText]=useState("")
    // // const[but,setBut]=useState([])
    // const addtext=()=>{
    //     // data = data.push({id:data.length+1,title:text,completed: false})
    //     data.push({id:data.length + 1,title:text,completed: false })
    //     setText('')   
    //     console.log(data,'dataaaaaaaaaaaa');
    // }
    
    return(
        <div className={style.title}>
        <h1 className={style.title}>{children}</h1>
            {/* <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
            <button className="addButton" onClick={addtext}> add</button> */}
        </div>
    )
}


export default Title