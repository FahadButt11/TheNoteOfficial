<<<<<<< HEAD
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
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from '../components/Header'
import PerfumesForMen from "../components/Content"
import ProductGrid from "../components/Product"
import Footer from '../components/Footer'

function App() {
  return(
<div>
<Header/>
<PerfumesForMen/>
< ProductGrid/>
<Footer/>
</div>
  );
>>>>>>> 944b1b7600424bc6d1f117a2446591b4fb21e7d3
}

export default App;
