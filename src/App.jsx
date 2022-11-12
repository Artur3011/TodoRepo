import { useState, useEffect } from "react";
import "./global.scss";
import Title from "./components/title";
import { data } from "./store/data";
// import Cli from './components/clic';
import AddItem from "./components/add";
// import axios from "axios"
// import Modal from './components/clic';
import List from "./components/list";

// import axios from "axios";

// const src = "https://jsonplaceholder.typicode.com/todos ";

function App() {
  const [articles, setArticles] = useState([]);
  // useEffect(() => {
  //   axios.get(src).then((data) => {
  //     setArticles(data.data);
  //   });
  // }, []);

  const [deli, setDeli] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  // const[articles,setArticles]=useState([]);

  // useEffect(() => {
  // axios
  // .get(data)
  // .then(data=>{
  //  console.log(data);
  // })
  // }, [])

  return (
    <div className="App">
      {/* {articles.map((articles) => (
        <div key={articles.id} style={{ borderColor: "red", borderWidth: 1 }}>
          <p>id:{articles.id}</p>
          <p>userId:{articles.userId}</p>
          <p>title:{articles.title}</p>
        </div>
      ))} */}

      <Title>My lesson</Title>
      <button
        className="openModalBtn"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Open Input
      </button>
      {openModal && (
        <AddItem deli={deli} setDeli={setDeli} setOpenModal={setOpenModal} />
      )}
      <div className="listContainer">
        {/* <button className='openModalBtn'onClick={()=>{setOpenModal(true)}}>Open</button>
        {openModal && < Modal closeModal = {setOpenModal}/>} */}
        <List deli={deli} setDeli={setDeli} />

        {/* {openModal && <Modal/>} */}
        {/* <AddItem deli={deli} setDeli={setDeli}/> */}
      </div>
    </div>
  );
}

export default App;
