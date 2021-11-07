import { createContext, useContext, useReducer } from "react";
const cartData = {
  cart: [],
  orders: [],
  totalAmount: 0,
};
const CartContext = createContext();
const CartContextDispatcher = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      const value = action.payload;
      const productItem = {
        ...value,
        quantity: 1,
      };

      const updatedTotalAmount =
        state.totalAmount + productItem.price * productItem.quantity;
      const existedProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existedProduct) {
        console.log("you added before");
        existedProduct.quantity = existedProduct.quantity + 1;
        return {
          ...state,
          cart: state.cart,
          totalAmount: updatedTotalAmount,
        };
      } else {
        const updatedItems = state.cart.concat(productItem);
        return {
          ...state,
          cart: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
    }
    case "increment": {
      const existedProduct = state.cart.find((item) => item.id === action.id);
      const updatedTotalAmount = state.totalAmount + existedProduct.price * 1;
      existedProduct.quantity++;
      return {
        ...state,
        cart: state.cart,
        totalAmount: updatedTotalAmount,
      };
    }
    case "decrement": {
      const existedProduct = state.cart.find((item) => item.id === action.id);
      const updatedTotalAmount = state.totalAmount - existedProduct.price * 1;
      if (existedProduct.quantity === 1) {
        const filteredProducts = state.cart.filter((p) => p.id !== action.id);
        return {
          ...state,
          cart: filteredProducts,
          totalAmount: updatedTotalAmount,
        };
      } else {
        existedProduct.quantity--;
        return {
          ...state,
          cart: state.cart,
          totalAmount: updatedTotalAmount,
        };
      }
    }
    case "ORDER": {
      state.cart.forEach((e, index) => {
        e.warhouse = e.warhouse - e.quantity;
        const orderList = [...state.orders];
        orderList[index] = e;
        // const test = state.orders.push(e);
        return {
          ...state,
          orders: orderList,
        };
      });
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
