import { useForm, useWatch } from "react-hook-form";
import styles from "./Registration.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationValidation } from "../../forms/registrationSchema";
import FormInput from "../../components/FormInput/FormInput";
import { fintrackRegister } from "../../assets/images";
import SiteLogo from "../../components/SiteLogo/SiteLogo";
import { useEffect } from "react";
import { Link } from "react-router";
import { ROUTES } from "../../routes/Route";
const Registration = () => {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(registrationValidation),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const password = useWatch({ control, name: "password" });
  useEffect(() => {
    if (touchedFields.confirmPassword) {
      trigger("confirmPassword");
    }
  }, [password, touchedFields.confirmPassword, trigger]);

  const onsubmit = (data: any) => {};
  return (
    <div className={styles.reg}>
      <div className={styles.container}>
        <div className={styles.reg_content}>
          <div className={styles.reg_left}>
            <SiteLogo />
            <div className={styles.reg_titles}>
              <p className={styles.reg_title}>Create Your Account</p>
              <p className={styles.reg_subTitle}>
                Start your financical journey today
              </p>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <FormInput
                label="Name"
                placeholder="Enter Your FullName"
                register={register("fullName")}
                errors={errors.fullName}
                additionalClassName={styles.reg_eachInputSending}
              />

              <FormInput
                register={register("email")}
                placeholder="Enter Your Email"
                label="Email"
                type="email"
                errors={errors.email}
                additionalClassName={styles.reg_eachInputSending}
              />
              <FormInput
                register={register("password")}
                placeholder="Enter Your Password"
                label="Password"
                type="password"
                errors={errors.password}
                additionalClassName={styles.reg_eachInputSending}
              />
              <FormInput
                register={register("confirmPassword")}
                placeholder="Confirm Your Password"
                label="Confirm Password"
                type="password"
                errors={errors.password}
                additionalClassName={styles.reg_eachInputSending}
              />
              <button type="submit">Create Account</button>
            </form>
            <div className={styles.reg_haveAccountBox}>
              <p>Already have an account?</p>
              <Link to={ROUTES.LOGIN}>Sign In</Link>
            </div>
          </div>
          <div className={styles.reg_right}>
            <img src={fintrackRegister} alt="reg_img" />
            <div className={styles.reg_right_titles}>
              <p className={styles.reg_rightTitle}>Build better money habits</p>
              <p className={styles.reg_rightSubTitle}>
                Set budgets, track spending and reach your financical goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
