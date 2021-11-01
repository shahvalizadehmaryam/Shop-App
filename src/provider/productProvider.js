import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getProduct } from "../services/productsService";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();

const Reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "FIRST_LOAD": {
      return {
        ...state,
        allProductsData: action.payload,
        products: action.payload,
        loading: false,
      };
    }
    case "CATEGORY_FILTER": {
      if (action.category.value === "") {
        return {
          ...state,
          allProductsData: state.allProductsData,
          products: state.allProductsData,
          loading: false,
        };
      }
      const filteredCategory = state.allProductsData.filter(
        (p) => p.type === action.category.value
      );
      return {
        ...state,
        products: filteredCategory,
        loading: false,
      };
    }
    case "SEARCH": {
      const searchValue = action.event.target.value;
      if (searchValue === "") {
        console.log("state", state);
        return {
          ...state,
          products: state.allProductsData,
          loading: false,
        };
      } else {
        const searchedProduct = state.allProductsData.filter((p) =>
          p.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return {
          ...state,
          products: searchedProduct,
          loading: false,
        };
      }
    }

    case "LOADING": {
      return {
        ...state,
        loading: action.payload,
      };
    }

  }
  return state;
};

const initialState = {
  allProductsData: [],
  products: [],
  cartList: [],
  totalAmount: 0,
  loading: false,
};
const ProductProvider = ({ children }) => {
  useEffect(() => {
    dispatcher({ type: "LOADING", payload: true });
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        dispatcher({ type: "FIRST_LOAD", payload: res.data });
        dispatcher({ type: "LOADING", payload: false });
      })
      .catch((err) => {});
  }, []);
  const [products, dispatcher] = useReducer(Reducer, initialState);
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
