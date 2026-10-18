import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import PageLayout from './components/PageLayout'
import HomePage from './page/HomePage'
import ProductPage from './page/ProductPage'
import CartPage from './page/CartPage'
import NotFoundPage from './page/NotFoundPage'

import DashboardLayout from './components/dashboard/DashboardLayout'
import Overviews from './components/dashboard/ui/Overviews'
import Product from './components/dashboard/ui/Product'
import ProductDetails from './components/dashboard/ui/ProductDetails'
import products from './data/products'

function App() {

  return (
    <>
      
      <BrowserRouter>
        {/* <Header /> */}

        <Routes>
          <Route path='/' element={<PageLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/products' element={<ProductPage />} />
            <Route path='/cart' element={<CartPage />} />
          </Route>



          <Route path='/admin' element={<DashboardLayout />}>
            <Route path='/admin' element={<Overviews />}/>
            <Route path='/admin/products' element={<Product products={products}/>} />
            <Route path='/admin/product/:id' element={<ProductDetails />} />
          </Route>

          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
