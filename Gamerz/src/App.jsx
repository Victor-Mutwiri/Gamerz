// App.jsx
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Products from './Pages/Products';
import ShoppingCart from './Pages/ShoppingCart';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { SampleProducts } from './Components/SampleProducts';


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Products" element={<Products products={SampleProducts} />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
