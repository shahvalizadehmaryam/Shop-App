import { createContext, useContext, useReducer } from "react";
import { productsData } from "../db/products";
const cartData = {
  cart: [],
  clickItem: 0,
  //totalprice
  totalAmount: 0,
};
const CartContext = createContext();
const CartContextDispatcher = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const value = action.data;
      const updatedTotalAmount =
        state.totalAmount + value.price * value.quantity;
      const index = state.cart.findIndex((item) => item.id === action.data.id);
      // const product = { ...action.data[index] };
      if (index >= 0) {
        console.log("you added before");
        const product = { ...state.cart[index] };
        product.quantity = product.quantity + action.data.quantity;
        const productList = [...state.cart];
        productList[index] = product;
        return {
          cart: productList,
          totalAmount: updatedTotalAmount,
        };
      } else {
        const updatedItems = state.cart.concat(value);
        return {
          cart: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
      // if( === action.data)
    }
    case "increment": {
      const index = action.data.findIndex((item) => item.id === action.id);
      const updatedTotalAmount =
        action.totalAmount + action.data[index].price * 1;
      const product = { ...action.data[index] };
      product.quantity++;
      const productList = [...action.data];
      productList[index] = product;
      return {
        cart: productList,
        totalAmount: updatedTotalAmount,
      };
    }
    case "decrement": {
      const index = action.data.findIndex((item) => item.id === action.id);
      const updatedTotalAmount =
        state.totalAmount -
        action.data[index].price * 1;
      const product = { ...action.data[index] };
      if (product.quantity === 1) {
        const filteredProducts = action.data.filter((p) => p.id !== action.id);
        return {
          cart: filteredProducts,
          totalAmount: updatedTotalAmount,
        };
      } else {
        const productList = [...action.data];
        product.quantity--;
        productList[index] = product;
        return {
          cart: productList,
          totalAmount: updatedTotalAmount,
        };
      }
    }
    case "edit": {
      const index = cartData.cart.findIndex((item) => item.id === action.id);
      const product = { ...cartData.cart[index] };
      product.title = action.event.target.value;
      const productList = [...cartData];
      productList.cart[index] = product;
      return productList;
    }
    case "COUNTITEM": {
      const x = [...cartData.cart];
      const y = [...cartData];
      const cartLength = x.filter((p) => p.quantity > 0).length;
      y.clickItem = cartLength;
      return y;

      //   return cartData.clickItem;
      //   console.log("cartLength", cartData.clickItem);
    }
    case "LIST": {
      return cartData.data;
    }

    default:
      return cartData;
  }
};

const CartProvider = ({ children }) => {
  const [cart, cartDispatcher] = useReducer(Reducer, cartData);
  return (
    <>
      <CartContext.Provider value={cart}>
        <CartContextDispatcher.Provider value={cartDispatcher}>
          {children}
        </CartContextDispatcher.Provider>
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
