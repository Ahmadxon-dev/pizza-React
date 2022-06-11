import React, { useEffect, useState } from "react";
import CartItem from "./CartItem";
const Cart = ({ products, changeQuantity, setCart, cart, classActive, toggleClass}) => {

  const [sum, setSum] = useState(0);

  useEffect(() => {
    let totalSum = 0;
    for (let i = 0; i < products.length; i++) {
      totalSum += products[i].price * products[i].quantity;
    }
    setSum(totalSum);
  }, [products]);



  const chekOut = () => {
    if(cart.length ===0){
        alert('Ваша корзина пуста')
    }
    else{
    alert(`Ваш заказ принят. Сумма заказа ${sum} sum.`);
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
}
  };

  return (
    <>
      
      <div id="shoppingcart" className={classActive ? "active" : ""}>
        <div className="shopping-cart">
          <div className="cartContent">
            <div className="cartList">
            <i className="fa-solid fa-x" onClick={() => toggleClass(false)}></i>
              {products.length === 0 ? (
                <div className="empty-cart">
                    <h2 className="text-center">Корзина пуста</h2>
                  <img
                    src="https://media3.giphy.com/media/giXLnhxp60zEEIkq8K/giphy.gif?cid=ecf05e47ehqfabsd9mn33p0ipu12r4u2tzb74gxigd5q8cfv&rid=giphy.gif&ct=g"
                    alt="imptyGIF"
                    className="emptyGIF"
                  />
                </div>
              ) : (
                products.map((product) => {
                  return (
                    <CartItem
                      key={product.id}
                      product={product}
                      changeQuantity={changeQuantity}
                    />
                  );
                })
              )}
            </div>
            <div className="total">
              <div className="info">
                <p className="totalText">Total</p>
                <p className="totalPrice">UZS: {sum.toFixed(2)}</p>
              </div>
              <button onClick={chekOut} className="purchaseBtn ">
                Purchase
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
