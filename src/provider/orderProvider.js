import { createContext, useContext, useReducer } from "react";
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
      const { cart, userId } = action.payload;
      const concatArr = orderData.orders.concat(cart);
      console.log("concatArr", concatArr);
      [...state.orders] = concatArr;
      return {
        ...state,
        userId: userId,
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
