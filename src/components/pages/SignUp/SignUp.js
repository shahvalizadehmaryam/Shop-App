import Input from "../../../common/Input/input";
import styles from "./signUp.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { Link } from "react-router-dom";
const initialValues = {
  name: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const { addToast } = useToasts();
  const onSubmit = async (values) => {
    const { data } = await axios.post("http://localhost:3001/users", values);
    if (data) {
      addToast("you signedup successfully.", {
        appearance: "success",
        autoDismiss: true,
      });
    }
  };
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is Required!")
      .min(3, "Name must be 3 characters!"),
    lastName: yup
      .string()
      .required("lastName is Required!")
      .min(3, "lastName must be 3 characters!"),
    phoneNumber: yup
      .string()
      .required("phone Number is required")
      .matches(/^[0-9]{11}$/, "Phone number is not valid")
      .nullable(),
    email: yup
      .string()
      .email("Email is in Invalid format")
      .required("Email is Required!"),
    password: yup.string().required("Password is Required!"),
    confirmPassword: yup
      .string()
      .required("ConfirmPassword is Required!")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSubmit,
    validationSchema: validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });
  return (
    <div className={styles.signUp}>
      <h2 className={styles.signUpTitle}>Sign Up Form</h2>
      <form className={styles.formPart} onSubmit={formik.handleSubmit}>
        <Input formik={formik} name="name" label="Name" />
        <Input formik={formik} name="lastName" label="LastName" />
        <Input formik={formik} name="phoneNumber" label="Phone Number" />
        <Input formik={formik} name="email" label="Email" />
        <Input
          formik={formik}
          name="password"
          label="Password"
          type="password"
        />
        <Input
          formik={formik}
          name="confirmPassword"
          label="Confirm Password"
          type="password"
        />
        <button type="submit" disabled={!formik.isValid}>
          SignUp
        </button>
      </form>
      <Link to="/signin">
      go to signin
      </Link>
    </div>
  );
};

export default SignUp;
