import { assertTSFunctionType } from "@babel/types";
import { createContext, useContext, useReducer } from "react";
import updateProductService from "../services/updateProductService";
const orderData = {
  orders: [],
  userId: 0,
};
const OrderContext = createContext();
const OrderContextDispatcher = createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case "ORDER_Products": {
      console.log("payload", action.payload);
      const { cart, uId } = action.payload;
      const concatArr = orderData.orders.concat(cart);
      // const updatedOrderData = {
      //   ...(state.orders = concatArr),
      //   ...(state.userId = uId),
      // };
      // return updatedOrderData;
        [...state.orders] = concatArr;
        const newUserId = uId;
        return {
          ...state,
          userId: newUserId,
        };
    }
    default: {
      return orderData;
    }
  }
};

const OrderProvider = ({ children }) => {
  const [order, ordertDispatcher] = useReducer(Reducer, orderData);
  return (
    <>
      <OrderContext.Provider value={order}>
        <OrderContextDispatcher.Provider value={ordertDispatcher}>
          {children}
        </OrderContextDispatcher.Provider>
      </OrderContext.Provider>
    </>
  );
};

export default OrderProvider;
export const useOrder = () => useContext(OrderContext);
export const useOrderAction = () => useContext(OrderContextDispatcher);
