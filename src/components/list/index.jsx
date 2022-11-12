import ListItem from '../listItem'
import s from "./style.module.scss"



const List = ({deli,setDeli }) => {
  return (
    <div className={s.list}>
          {deli.map(item => <ListItem key={item.id} deli={deli} setDeli={setDeli} id={item.id} title={item.title}/>
          )}
        </div>
  )
}

export default List