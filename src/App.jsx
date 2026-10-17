import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './page/Home'
import Product from './page/Product'
import Cart from './page/Cart'
import Header from './components/Header'
import NotFound from './page/NotFound'
import DashboardLayout from './components/DashboardLayout'
import Overviews from './components/Overviews'

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

          <Route path='/admin' element={<DashboardLayout />}>
            <Route path='/admin' element={<Overviews />}/>
            <Route path='/admin/products' element={<Product />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
