import { ToastProvider } from "react-toast-notifications";
import Header from "../components/Header/Header";
import CartProvider from "../provider/cartProvider";
import ProductProvider from "../provider/productProvider";
import UserProvider from "../provider/userProvider";
import "./Layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <div>
        <ToastProvider autoDismiss={true}>
          <ProductProvider>
            <CartProvider>
              <UserProvider>
                <Header className="header" />
                {children}
              </UserProvider>
            </CartProvider>
          </ProductProvider>
        </ToastProvider>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
