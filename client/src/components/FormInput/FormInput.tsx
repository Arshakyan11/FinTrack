import styles from "./FormInput.module.scss";
import FormHelperText from "../FormHelperText/FormHelperText";
import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type FormInputType = {
  label: string;
  placeholder: string;
  hint: string;
  type?: string;
  errors: FieldError | undefined;
  register: UseFormRegisterReturn;
  additionalClassName?: string;
  disabled?: boolean;
};

const FormInput = ({
  label,
  placeholder,
  hint,
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
      <FormHelperText error={errors?.message} hint={hint} />
    </div>
  );
};

export default FormInput;
