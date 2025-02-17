"use client"

import React, { createContext, useContext, useState } from "react"
import { Alert } from "./Alert"

type AlertType = "success" | "error" | "warning" | "info"

interface AlertContextType {
  showAlert: (message: string, type: AlertType) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<{ message: string; type: AlertType } | null>(null)

  const showAlert = (message: string, type: AlertType) => {
    setAlert({ message, type })
    setTimeout(() => setAlert(null), 3000)
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alert && <Alert message={alert.message} variant={alert.type} />}
    </AlertContext.Provider>
  )
}

export function useAlert() {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider")
  }
  return context
}

