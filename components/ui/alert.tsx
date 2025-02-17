"use client"

import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "fixed bottom-4 right-4 p-4 rounded-lg shadow-lg font-mono z-50 transition-opacity duration-300",
  {
    variants: {
      variant: {
        success: "bg-green-500 text-white",
        error: "bg-red-500 text-white",
        warning: "bg-yellow-500 text-white",
        info: "bg-blue-500 text-white",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
)

export interface AlertProps extends VariantProps<typeof alertVariants> {
  message: string
  className?: string
}

export function Alert({ message, variant, className }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant }), className)}>
      {message}
    </div>
  )
}
