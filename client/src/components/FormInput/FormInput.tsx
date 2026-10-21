import styles from "./FormInput.module.scss";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputType = {
  label: string;
  placeholder: string;
  type?: string;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
  additionalClassName?: string;
  disabled?: boolean;
};

const FormInput = ({
  label,
  placeholder,
  type = "text",
  register,
  errors,
  additionalClassName,
  disabled = false,
}: FormInputType) => {
  return (
    <div
      className={`${styles.form_eachInput} ${errors ? styles.wrongError : ""} ${
        additionalClassName ?? ""
      }  `}
    >
      <fieldset>
        <input
          type={type}
          placeholder={placeholder}
          {...register}
          aria-label={label}
          disabled={disabled}
        />
        <legend>{label}</legend>
      </fieldset>
      <p>{errors?.message}</p>
    </div>
  );
};

export default FormInput;
