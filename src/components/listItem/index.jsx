import React ,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import style from './style.module.scss'

const ListItem = ({id,deli,title,setDeli}) => {
    const[value, setValue] = useState('')
    const [edit, setEdit] = useState("");


function changeItem(id,title) {
  setEdit(id)
  setValue(title)  
}

const changeText = (event) => {
  setValue(event.target.value)      
}
function saveValue (id){
  let i = deli.map(item => {if (item.id === id){
    item.title = value
  }return item})
  setDeli(i)
  setEdit('')
}
  function del(id){
   const vazgen =deli.filter((item)=>item.id!==id)
    
  setDeli(vazgen)
  }

  return (
    <div className={style.listItem} key={id}>
      <p>{id}</p>
      {edit === id ? (
        <input value={value} onChange={changeText} />
      ) : (
        <h2>{title}</h2>
      )}
      {edit === id ? (
        <div className="buttons">
          <button onClick={() => saveValue(id)} className="changeBtn">
            V
          </button>
          <button onClick={() => setEdit(true)} className="changeBtn">
            X
          </button>
        </div>
      ) : (
        <div className="buttons">
          <button onClick={() =>del(id)} className="changeBtn">
            del
          </button>
          <button
            onClick={() => changeItem(id,title)}
            className="changeBtn"
          >
            <FontAwesomeIcon icon={faPen} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ListItem;
