import { useForm, useWatch } from "react-hook-form";
import styles from "./Registration.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { reegistrationValidation } from "../../forms/registrationSchema";
import FormInput from "../../components/FormInput/FormInput";
import { fintrackRegister } from "../../assets/images";
import SiteLogo from "../../components/SiteLogo/SiteLogo";
import { useEffect } from "react";
const Registration = () => {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: zodResolver(reegistrationValidation),
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
                placeholder="Enter Your Name"
                register={register("firstName")}
                errors={errors.firstName}
                additionalClassName={styles.reg_eachInputSending}
                hint="John"
              />
              <FormInput
                register={register("lastName")}
                placeholder="Enter Your LastName"
                label="LastName"
                errors={errors.lastName}
                additionalClassName={styles.reg_eachInputSending}
                hint="Smith"
              />
              <FormInput
                register={register("email")}
                placeholder="Enter Your Email"
                label="Email"
                type="email"
                errors={errors.email}
                additionalClassName={styles.reg_eachInputSending}
                hint="e.g. username@domain.com"
              />
              <FormInput
                register={register("phoneNumber")}
                placeholder="Enter Your Phone"
                label="Phone"
                type=""
                errors={errors.phoneNumber}
                additionalClassName={styles.reg_eachInputSending}
                hint="+37477112233"
              />
              <FormInput
                register={register("password")}
                placeholder="Enter Your Password"
                label="Password"
                type="password"
                errors={errors.password}
                additionalClassName={styles.reg_eachInputSending}
                hint="ABCDE123a"
              />
              <FormInput
                register={register("confirmPassword")}
                placeholder="Confirm Your Password"
                label="Confirm Password"
                type="password"
                errors={errors.password}
                additionalClassName={styles.reg_eachInputSending}
                hint="ABCDE123a"
              />
              <button type="submit">Submit</button>
              <button type="reset">Reset</button>
            </form>
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
