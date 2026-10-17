import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Product from './page/Product'
import Cart from './page/Cart'
import Header from './components/Header'

function App() {

  return (
    <>
      
      <BrowserRouter>
        {/*  */}
        <Header />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
