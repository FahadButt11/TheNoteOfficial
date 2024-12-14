import { getPosts } from './api/fakeApi';
import './App.css';
import {useEffect, useState} from "react";
import Card from './components/card';


function App() {

  const [data, setData]=useState(null);
  
  useEffect(()=> {
     getPosts().then(posts=>{setData(posts);
     });

  },[]);

  return(
    <div>
      {data? data.map( (e)=> <Card title={e.title} body={e.body}/> ) : <p>no data</p> }
    </div>
  )
}

export default App
