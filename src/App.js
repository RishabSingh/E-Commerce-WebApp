
import './App.css';
import { Hero } from './Components/Hero/Hero';
// import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/Navbar';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Product } from './Pages/Product';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
   
    <div>
       <BrowserRouter>
           <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory category="men"/>}/>
        <Route path='/womens' element={<ShopCategory category="women"/>}/>
        <Route path='/kids' element={<ShopCategory category="kid"/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path=':ProductId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
       </BrowserRouter>

       <Hero/>
     
      
      
      
      
    </div>
    
  );
}

export default App;
