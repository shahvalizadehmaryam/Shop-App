import Input from "../../../common/Input/input";
import { useFormik } from "formik";
import * as yup from "yup";
const initialValues = {
  name: "",
  password: "",
};
const SignIn = () => {
  const formik = useFormik({
    initialValues: initialValues,
  });
  return (
    <div>
      <h2>Sign In Page</h2>
      <form>
        <Input formik={formik} name="name" label="Name" />
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
    </div>
  );
};

export default SignIn;
