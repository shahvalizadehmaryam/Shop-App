import styles from "./input.module.css";
const Input = ({ formik, name, label, type = "text" }) => {
  return (
    <div className={styles.formControl}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...formik.getFieldProps({ name })}
        id={name}
        name={name}
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className={styles.error}>{formik.errors[name]}</div>
      )}
    </div>
  );
};

export default Input;
