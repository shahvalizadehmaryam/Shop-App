import Input from "../../../common/Input/input";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import queryString from "query-string";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./signIn.module.css";
import { useUser, useUserAction } from "../../../provider/userProvider";
import getUserService from "../../../services/getUserService";
const initialValues = {
  userName: "",
  email: "",
  password: "",
};
const SignIn = ({ history }) => {
  const users = useUser();
  const userDispatcher = useUserAction();
  const onSubmit = async (user) => {
    const { data } = await getUserService(user.userName, user.email);
    const dataObject = data[0];
    if (data) {
      userDispatcher({ type: "GETUSERINFORMATION", payload: dataObject });
      history.push("/");
      console.log(data);
    }

    // axios
    //   .get(
    //     `http://localhost:3001/users/?userName=${values.userName}&email=${values.email}`
    //   )
    //   .then((res) => {
    //     if (res.data) {
    //       setUser(res.data);
    //       history.push("/");
    //       console.log(res);
    //     } else {
    //       console.log("enter valid data");
    //     }
    //   });
    console.log(user);
  };
  const validationSchema = yup.object({
    userName: yup.string().required("Name is Required!"),
    password: yup.string().required("Password is Required!"),
    email: yup
      .string()
      .email("Email is in Invalid format")
      .required("Email is Required!"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className={styles.signIn}>
      <h2 className={styles.signInTitle}>Sign In Page</h2>
      <form className={styles.formPart} onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="userName" label="User Name" />
        <Input formik={formik} name="email" label="Email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          SignIn
        </button>
      </form>
      <Link to="/signup">go to signup </Link>
    </div>
  );
};

export default SignIn;
