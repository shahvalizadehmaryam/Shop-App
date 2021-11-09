import { useCart, useCartAction } from "../../../provider/cartProvider";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import { useToasts } from "react-toast-notifications";
import OrderServive from "../../../services/orderService";
import updateProductService from "../../../services/updateProductService";
import { useState } from "react";
import { useOrder, useOrderAction } from "../../../provider/orderProvider";
import { useUser } from "../../../provider/userProvider";
import axios from "axios";

const Cart = (props) => {
  const { addToast } = useToasts();
  const cartData = useCart();
  const cartDispatcher = useCartAction();
  const orderData = useOrder();
  const orderDispatcher = useOrderAction();
  const { userData } = useUser();
  console.log("cartData", cartData);
  const totalAmount = cartData.totalAmount.toFixed(2);
  const orderHandler = () => {
    // if (userData) {
    //   alert("you should sign in please to order products");
    // } else {
    orderDispatcher({
      type: "ORDER_Products",
      payload: { cart: cartData.cart, uId: userData.id },
    });
    axios.post("http://localhost:3001/orders", orderData).then((res) => {
      console.log(res);
    });
    props.history.push("/");
    addToast("Your order has been successfully registered", {
      appearance: "success",
      autoDismiss: true,
    });
    // }
    //  cartData.cart.forEach((e) => {
    //   e.warhouse = e.warhouse - e.quantity;
    //   const orderList = [...cartData.orders, e];
    //   setOrders(orderList);
    // });
    // console.log("orders", orders);
  };
  const cartItems = cartData.cart.map((item) => (
    <CartItem
      key={item.id}
      item={item}
      onIncrement={() => {
        if (item.quantity < item.warhouse) {
          cartDispatcher({
            type: "increment",
            id: item.id,
          });
        } else {
          addToast("Sorry , Check out inventory", { appearance: "error" });
        }
      }}
      onDecrement={() =>
        cartDispatcher({
          type: "decrement",
          id: item.id,
        })
      }
    />
  ));
  return (
    <div>
      {!cartItems.length && (
        <p className={styles.cartEmptyMessage}>Your Cart is Empty!</p>
      )}
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>TotalAmoun</span>

        <span className={styles.amount}>
          {cartData.totalAmount <= 0 ? 0 : `$${totalAmount}`}
        </span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onClose}>
          close
        </button>
        <button className={styles.button} onClick={orderHandler} type="button">
          order
        </button>
      </div>
    </div>
  );
};

export default Cart;

//cartItem component
