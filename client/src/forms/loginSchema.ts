import z from "zod";
import { forEmailValidation, forPasswordValidation } from "./global_schema";

export const loginValidation = z.object({
  email: forEmailValidation,
  password: forPasswordValidation,
});
