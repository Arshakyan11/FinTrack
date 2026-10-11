import z from "zod";

export const forNameSrnameValidation = z
  .string()
  .regex(/^[A-Za-z ]+$/, "Only Latin letters and spaces are allowed")
  .min(2, "Minimum Length is 2")
  .max(50, "Maximum Length is 50");

export const forEmailValidation = z
  .string()
  .trim()
  .min(1, "Email is required")
  .regex(
    /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
    "Please enter a valid email address",
  );

export const forPasswordValidation = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .max(16, "Password must be at most 16 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(
    /[!@#$%^&*]/,
    "Password must contain at least one special character (!@#$%^&*)",
  )
  .regex(/^[^\s~\\]+$/, "Password contains invalid characters");
