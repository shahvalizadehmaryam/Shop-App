import http from "./httpService";
export const OrderServive = (order) => {
  return http.post("/orders", order);
};

export default OrderServive;
