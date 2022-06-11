import './App.css';
import Header from './Components/Header';
import React, { useEffect, useState } from 'react';
import Products from './Components/Products';
import FilterList from './Components/FilterList';

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const productlist = [...cart];

    if( !productlist.includes(product) ) {
      productlist.push(product);
    }
    const index = productlist.indexOf(product);
    productlist[index].quantity++;
    setCart(productlist);
    localStorage.setItem('cart', JSON.stringify(productlist));


    alert('product added to cart')
  }

  const changeQuantity = (product, e) => {
    const productlist = [...cart]
    const index = productlist.indexOf(product);
    if (e === '+') {
      productlist[index].quantity++;
  }
  else{
    if (productlist[index].quantity > 1) {
      productlist[index].quantity--;
    }
    else {
      productlist.splice(index, 1);
    }
  }
  localStorage.setItem('cart', JSON.stringify(productlist));
  setCart(productlist);
}

  useEffect(() => {
    setProducts(FilterList)
    if(JSON.parse(localStorage.getItem('cart'))) {
      setCart(JSON.parse(localStorage.getItem('cart')))
    }
  }, []);
  return (
    <div className="wrapper ">
      <div  className="wrapper-c">
        <Header cart={cart} setCart={setCart} products={cart} changeQuantity={changeQuantity}/>
        <Products  addToCart={addToCart} products={products}/>
      </div>
    </div>
  );
}

export default App;
