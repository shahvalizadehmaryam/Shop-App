import { createContext, useContext, useReducer } from "react";
const cartData = {
  cart: [],
  totalAmount: 0,
};
const CartContext = createContext();
const CartContextDispatcher = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const value = action.payload;
      const updatedTotalAmount =
        state.totalAmount + value.price * value.quantity;
      const existedProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existedProduct) {
        console.log("you added before");
        existedProduct.quantity = existedProduct.quantity + 1;
        return {
          cart: state.cart,
          totalAmount: updatedTotalAmount,
        };
      } else {
        const updatedItems = state.cart.concat(value);
        return {
          cart: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
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
        state.totalAmount - action.data[index].price * 1;
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
    case "COUNTITEM": {
      const x = [...cartData.cart];
      const y = [...cartData];
      const cartLength = x.filter((p) => p.quantity > 0).length;
      y.clickItem = cartLength;
      return y;
    }
    case "LIST": {
      return cartData.cart;
    }

    default: {
      return cartData;
    }
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
