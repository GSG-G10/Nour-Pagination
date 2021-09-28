import React , {useState, useEffect} from 'react';
import { Pagination } from 'antd';

import './App.css';
import 'antd/dist/antd.css'

function App() {

  const [data, setData] = useState([]);
  console.log(data);

  useEffect( () => {
    let isCancelled = false;

    if(!isCancelled){
    fetch(`https://api.unsplash.com/search/collections?page=2&limit=10&query=cat&client_id=kQ_rA8Dd9Tb-JZ80Nx6RyFBtaoIFyaP5kdLn5EmGkVM`)
    .then(res => res.json())
    // .then(res => console.log(res.results))
    // .then(res => setData(res.results))
 }

 return () => {
    isCancelled = true;
}       
},)


  return (
    <div className="App">

      <h1> Explore Cats Photos</h1>
      <Pagination defaultCurrent={1} total={50} />
  
    </div>
  );
}

export default App;
