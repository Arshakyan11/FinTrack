import styles from "./FormHelperText.module.scss";
type FormHelperTextProps = {
  error?: string;
  hint?: string;
};
const FormHelperText = ({ error, hint }: FormHelperTextProps) => {
  return (
    <p
      className={`${styles.registration_exampleAndErrors} ${
        error ? styles.errorField : ""
      }`}
    >
      {error ?? hint}
    </p>
  );
};

export default FormHelperText;
  