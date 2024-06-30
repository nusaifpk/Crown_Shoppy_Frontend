import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Product from './pages/products/Product'
import NavBar from "./components/navbar/Navbar.jsx"
import 'mdbreact/dist/css/mdb.css';
import ProductDetails from './pages/product_details/ProductDetails.jsx'
import Cart from './pages/cart/Cart.jsx'
import {Toaster} from 'react-hot-toast'

function App() {

  return (
    <>
      <Toaster/>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/productdetails' element={<ProductDetails/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
