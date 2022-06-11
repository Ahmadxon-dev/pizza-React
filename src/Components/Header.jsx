import React, {useState} from "react";
import Cart from "./Cart";
import TopHeader from "./TopHeader";
const Header = ({products, changeQuantity, setCart, cart}) => {
  const [classActive, toggleClass] = useState(false);

  const toggleBtn = () => {
    toggleClass(!classActive);
  };
  return (
    <>
      <TopHeader />
      <header className="header pt-3 pb-3">
        <div className="header-container d-flex justify-content-between">
          <nav className="gap-5">
            <a href="#" className="link text-black">Пицца</a>
            <a href="#" className="link text-black">Комбо</a>
            <a href="#" className="link text-black">Закуски</a>
            <a href="#" className="link text-black">Десерты</a>
            <a href="#" className="link text-black">Напитки</a>
            <a href="#" className="link text-black">Акции</a>
            <a href="#" className="link text-black">Контакты</a>
            <a href="#" className="link text-black">Франшиза</a>
            <a href="#" className="link text-black">О нас</a>
            <a href="#" className="link camera text-black"> Прямой эфир</a>
            
          </nav>
          <button
        onClick={toggleBtn}
        style={{ borderRadius: "25px", padding: "5px 10px" }}
        className="text-light toggle-btn"
      >
        Корзина
      </button>

          
        </div>
        <Cart toggleClass={toggleClass} classActive={classActive} cart={ cart } setCart={setCart} products={products} changeQuantity={changeQuantity} />
      </header>
    </>
  );
};
export default Header;
