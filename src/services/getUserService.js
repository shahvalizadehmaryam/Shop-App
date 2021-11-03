import http from "./httpService";
export const getUserService = (userName, email) => {
  return http.get(
    `/users/?userName=${userName}&email=${email}`
  );
};
export default getUserService;
