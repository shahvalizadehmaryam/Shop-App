import { useProduct } from "../../provider/productProvider";
import Product from "../Product/product";
import styles from "./productList.module.css";

const ProductList = () => {
  const products = useProduct();
  return (
    <div className={styles.productsContainer}>
      {products.map((product) => {
        return <Product key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
