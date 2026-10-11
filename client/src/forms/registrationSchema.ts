import z from "zod";
import {
  forEmailValidation,
  forNameSrnameValidation,
  forPasswordValidation,
} from "./global_schema";

export const reegistrationValidation = z
  .object({
    firstName: forNameSrnameValidation,
    lastName: forNameSrnameValidation,
    email: forEmailValidation,
    phoneNumber: z
      .string()
      .trim()
      .min(1, "Phone number is required")
      .regex(/^\+\d{9,15}$/, "Please enter a valid phone number"),
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
