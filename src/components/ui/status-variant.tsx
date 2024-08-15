import { cva } from "class-variance-authority";

export const statusVariant = cva("", {
  variants: {
    status: {
      success: "text-green-600",
      pending: "text-yellow-600",
      failed: "text-red-600",
      disabled: "text-muted-foreground",
    },
  },
  defaultVariants: {
    status: "success",
  },
});
