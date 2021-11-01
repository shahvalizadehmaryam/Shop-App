import http from "./httpService";
export const getProduct = (id) => {
  return http.get(`/products/${id}`);
};

export default http;
