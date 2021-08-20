import { useState } from "react";
import styles from "./App.module.css";
import Cart from "./components/Cart/Cart";
import ProductList from "./components/ProductList/productList";
import Sidebar from "./components/SideBar/sidebar";
import CartProvider, { useCart, useCartAction } from "./provider/cartProvider";
import ProductProvider from "./provider/productProvider";

function App() {
  const [isShow, setIsShow] = useState(false);
  const cart = useCart();
  const cartDispatcher = useCartAction();
  const showModalHandler = () => {
    
    setIsShow(true);
  };
  const closeModalHandler = () => {
    setIsShow(false);
  };
  return (
    <CartProvider>
      <div className={styles.layoutContainer}>
        <ProductProvider>
          <Sidebar onShow={showModalHandler} />
          {isShow && (
            <Cart onShow={showModalHandler} onClose={closeModalHandler} />
          )}

          <ProductList />
        </ProductProvider>
      </div>
    </CartProvider>
  );
}

export default App;
