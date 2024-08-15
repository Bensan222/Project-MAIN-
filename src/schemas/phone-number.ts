import { z } from "zod";

export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;

export const passwordSchema = z.string().superRefine((val, ctx) => {
  if (val.length < 8) {
    ctx.addIssue({
      code: "custom",
      message: "Password must be at least 8 characters long",
      fatal: true,
    });
    return z.NEVER;
  }
  if (!val.match(/[a-z]/)) {
    ctx.addIssue({
      code: "custom",
      message: "Password must contain at least one lowercase letter",
      fatal: true,
    });

    return z.NEVER;
  }
  if (!val.match(/[A-Z]/)) {
    ctx.addIssue({
      code: "custom",
      message: "Password must contain at least one uppercase letter",
      fatal: true,
    });
    return z.NEVER;
  }
  if (!val.match(/\d/)) {
    ctx.addIssue({
      code: "custom",
      message: "Password must contain at least one number",
      fatal: true,
    });
    return z.NEVER;
  }
  if (!val.match(/[^a-zA-Z0-9]/)) {
    ctx.addIssue({
      code: "custom",
      message: "Password must contain at least one special character",
      fatal: true,
    });
    return z.NEVER;
  }
});

export type PasswordDto = z.infer<typeof passwordSchema>;
