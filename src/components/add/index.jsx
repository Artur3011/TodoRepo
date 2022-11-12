import { useState } from "react"
import k from "./style.module.scss"


const AddItem = ({ deli, setDeli, setOpenModal}) => {
    const [title, setTitle] = useState("")

    function AddItem() {
      const newItem = {
        id: deli.length + 1,
        title,
  
      }
      setDeli([...deli, newItem])
      console.log(deli)
      setTitle('')
      setOpenModal(false);
    }
    return (
      
        <div className = {k.lis}> 
        <button onClick={()=>setOpenModal(false)}>x</button>

        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={AddItem}>Add</button>
      </div>
      
    )
  }
  export default AddItem