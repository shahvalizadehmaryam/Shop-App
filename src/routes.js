import Cart from "./components/pages/Cart/Cart";
import Home from "./components/pages/Home/Home";
import SignUp from "./components/pages/SignUp/SignUp";
import SignIn from "./components/pages/SignIn/SignIn";

const routes = [
  { path: "/signin", component: SignIn, id: 4 },
  { path: "/signup", component: SignUp, id: 3 },

  { path: "/cart", component: Cart, id: 2 },
  { path: "/", component: Home, exact: true, id: 6 },
];
export default routes;
