import http from "./httpService";
export const updateProductService = (id, cartItem) => {
  return http.put(`/products/${id}`, cartItem);
};

export default updateProductService;
