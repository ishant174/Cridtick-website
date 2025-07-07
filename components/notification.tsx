"use client"

import { useEffect, useState } from "react"
import { CheckCircle, XCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NotificationProps {
  message: string
  type: "success" | "error"
  isVisible: boolean
  onClose: () => void
}

export function Notification({ message, type, isVisible, onClose }: NotificationProps) {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true)
    } else {
      // Delay unmounting to allow exit animation
      const timer = setTimeout(() => setShouldRender(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isVisible])

  useEffect(() => {
    if (isVisible) {
      // Auto-close after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!shouldRender) return null

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* Backdrop for mobile */}
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 md:hidden ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Notification Container */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <div
          className={`mx-auto max-w-md md:max-w-lg transform transition-all duration-300 ease-out pointer-events-auto ${
            isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-full opacity-0 scale-95"
          }`}
        >
          <div
            className={`rounded-xl shadow-2xl border backdrop-blur-sm ${
              type === "success"
                ? "bg-green-50/95 dark:bg-green-900/95 border-green-200 dark:border-green-800"
                : "bg-red-50/95 dark:bg-red-900/95 border-red-200 dark:border-red-800"
            }`}
          >
            <div className="p-4 md:p-6">
              <div className="flex items-start space-x-3">
                {/* Icon */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                    type === "success" ? "bg-green-100 dark:bg-green-800" : "bg-red-100 dark:bg-red-800"
                  }`}
                >
                  {type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-sm md:text-base font-semibold ${
                      type === "success" ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"
                    }`}
                  >
                    {type === "success" ? "Message Sent Successfully!" : "Error Sending Message"}
                  </h3>
                  <p
                    className={`mt-1 text-xs md:text-sm ${
                      type === "success" ? "text-green-700 dark:text-green-300" : "text-red-700 dark:text-red-300"
                    }`}
                  >
                    {message}
                  </p>
                </div>

                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  className={`flex-shrink-0 w-8 h-8 rounded-full hover:bg-white/50 dark:hover:bg-black/20 ${
                    type === "success" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                  }`}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Progress Bar */}
              <div
                className={`mt-3 h-1 rounded-full overflow-hidden ${
                  type === "success" ? "bg-green-200 dark:bg-green-800" : "bg-red-200 dark:bg-red-800"
                }`}
              >
                <div
                  className={`h-full rounded-full transition-all duration-[5000ms] ease-linear ${
                    type === "success" ? "bg-green-500 dark:bg-green-400" : "bg-red-500 dark:bg-red-400"
                  } ${isVisible ? "w-0" : "w-full"}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
