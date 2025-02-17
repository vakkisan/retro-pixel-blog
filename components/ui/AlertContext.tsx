"use client"

import type React from "react"
import { createContext, useContext, useState, type ReactNode } from "react"
import Alert, { type AlertProps } from "./Alert"

interface AlertContextType {
  showAlert: (message: string, type: "success" | "error" | "info", duration?: number) => void
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [alerts, setAlerts] = useState<AlertProps[]>([])

  const showAlert = (message: string, type: "success" | "error" | "info", duration = 5000) => {
    const newAlert: AlertProps = { message, type, duration }
    setAlerts((prevAlerts) => [...prevAlerts, newAlert])
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alerts.map((alert, index) => (
        <Alert key={index} {...alert} />
      ))}
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (context === undefined) {
    throw new Error("useAlert must be used within an AlertProvider")
  }
  return context
}

