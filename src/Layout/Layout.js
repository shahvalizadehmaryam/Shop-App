import Header from "../components/Header/Header";
import CartProvider from "../provider/cartProvider";
import ProductProvider from "../provider/productProvider";
import "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ProductProvider>
          <CartProvider>
            <Header className="header" />
            {children}
          </CartProvider>
        </ProductProvider>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
