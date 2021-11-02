import { ToastProvider } from "react-toast-notifications";
import Header from "../components/Header/Header";
import CartProvider from "../provider/cartProvider";
import ProductProvider from "../provider/productProvider";
import "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ToastProvider autoDismiss={true}>
          <ProductProvider>
            <CartProvider>
              <Header className="header" />
              {children}
            </CartProvider>
          </ProductProvider>
        </ToastProvider>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
