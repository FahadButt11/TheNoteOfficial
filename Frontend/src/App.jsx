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
}

export default App;
