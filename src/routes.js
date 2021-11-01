import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home/Home";

const routes = [
  { path: "/cart", component: Cart, id: 2 },
  { path: "/", component: Home, exact: true, id: 6 },
];
export default routes;
