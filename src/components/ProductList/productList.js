import { useProduct } from "../../provider/productProvider";
import Product from "../ProductList/Product/product";
import styles from "./productList.module.css";
import { ToastProvider } from "react-toast-notifications";

const ProductList = () => {
  const { products } = useProduct();

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {
        return (
          <ToastProvider>
            <Product key={product.id} product={product} />
          </ToastProvider>
        );
      })}
    </div>
  );
};

export default ProductList;
