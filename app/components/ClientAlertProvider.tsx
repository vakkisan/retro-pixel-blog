"use client"

import type React from "react"
import { AlertProvider } from "@/components/ui/AlertContext"

export function ClientAlertProvider({ children }: { children: React.ReactNode }) {
  return <AlertProvider>{children}</AlertProvider>
}

