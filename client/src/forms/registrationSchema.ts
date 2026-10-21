import z from "zod";
import { forEmailValidation, forPasswordValidation } from "./global_schema";

export const reegistrationValidation = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, "Full name must be at least 2 characters")
      .max(80, "Full name must not exceed 80 characters"),
    email: forEmailValidation,
    password: forPasswordValidation,
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .superRefine((data, ctx) => {
    if (
      data.password &&
      data.confirmPassword &&
      data.password !== data.confirmPassword
    ) {
      ctx.addIssue({
        path: ["confirmPassword"],
        code: "custom",
        message: "Passwords don't match",
      });
    }
  });
