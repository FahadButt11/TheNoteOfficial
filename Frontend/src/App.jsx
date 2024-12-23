import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import About from './pages/About';
import Collections from './pages/Collections';
import Product from './pages/Product';
import CartPage from './pages/CartPage';
import Login from './pages/Login';
import Register from './pages/Register';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import DeliveryOrders from './pages/DeliveryOrders';
import ExchangeReturns from './pages/ExchangeReturns';
import Men from './pages/Men';
import { SidebarProvider } from './context/SidebarContext';
import { CartProvider } from "./context/CartContext";
import CheckoutPage from './pages/CheckoutPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';
import { GlobalStateProvider } from './context/GlobalStateContext';

function App() {
  // className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]
  return(
<div >
<CartProvider>  
<SidebarProvider>
<GlobalStateProvider>  
<Navbar/>
<Routes>
  <Route path='/' element={<Home/>} />
    <Route path='/collection' element={<Collections />} />
    <Route path='/men-collection' element={<Men />} />
    <Route path='/women-collection' element={<Collections />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
  <Route path='/checkout' element={<CheckoutPage/>} />
  <Route path='/shipping' element={<ShippingPage />} />
  <Route path='/payment' element={<PaymentPage />} />

  <Route path='/product/:productId' element={<Product />} />
  <Route path='/cart' element={<CartPage />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/place-order' element={<PlaceOrder />} />
  <Route path='/orders' element={<Orders />} /> 
  <Route path='/delivery-orders' element={<DeliveryOrders/>}/>
  <Route path='/exchange-returns' element={<ExchangeReturns/>}/>


</Routes>
<Footer/>
<Copyright/>
</GlobalStateProvider>
</SidebarProvider>
</CartProvider>
{/* <Navbar /> */}


</div>
  );

};
export default App;
