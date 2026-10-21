import { Link } from "react-router";
import { fintrackLogin } from "../../assets/images";
import FormInput from "../../components/FormInput/FormInput";
import SiteLogo from "../../components/SiteLogo/SiteLogo";
import styles from "./Login.module.scss";
import { ROUTES } from "../../routes/Route";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "../../forms/loginSchema";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginValidation) });

  const onsubmit = (data: any) => {};

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <div className={styles.login_content}>
          <div className={styles.login_content_left}>
            <SiteLogo />
            <div className={styles.left_titles}>
              <div className={styles.left_titles_mainTitle}>Welcome back</div>
              <div className={styles.left_titles_subTitle}>
                Sign in to your account to continue
              </div>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
              <FormInput
                label="Email"
                placeholder="Enter your Email"
                register={register("email")}
                errors={errors.email}
                additionalClassName={styles.login_eachInputSending}
              />
              <FormInput
                label="Password"
                placeholder="Enter your password"
                register={register("password")}
                errors={errors.password}
                additionalClassName={styles.login_eachInputSending}
              />
              <button type="submit">Sign In</button>
            </form>
            <div className={styles.left_createAccount_box}>
              <p>Don't have an account? </p>
              <Link to={ROUTES.REGISTRATION}>Sign up</Link>
            </div>
          </div>
          <div className={styles.login_content_right}>
            <img src={fintrackLogin} alt="loginImg" />
            <div className={styles.right_text_box}>
              <p className={styles.right_text_title}>
                Take control of your finances
              </p>
              <p className={styles.right_text_subTitle}>
                Track your income, expenses and achieve your goals with
                FinTrack.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
