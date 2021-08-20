import { createContext, useContext, useReducer } from "react";
import { productsData } from "../db/products";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "AllFilterType":
      return productsData;

    case "WomenFilterType": {
      const filteredData = productsData.filter((p) => p.type === action.value);
      return filteredData;
    }
    case "ChildrenFilterType": {
      const filteredData = productsData.filter((p) => p.type === action.value);
      return filteredData;
    }
    case "MenFilterType": {
      const filteredData = productsData.filter((p) => p.type === action.value);
      return filteredData;
    }
  }
  return productsData;
};
const ProductProvider = ({ children }) => {
  const [products, dispatcher] = useReducer(Reducer, productsData);
  return (
    <>
      <ProductContext.Provider value={products}>
        <ProductContextDispatcher.Provider value={dispatcher}>
          {children}
        </ProductContextDispatcher.Provider>
      </ProductContext.Provider>
    </>
  );
};

export default ProductProvider;
export const useProduct = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDispatcher);
