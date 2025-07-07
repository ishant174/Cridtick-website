"use client"

import { useState, useImperativeHandle, forwardRef } from "react"
import { MessageCircle, Mail, Phone, X, Send, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface FloatingContactButtonProps {
  onContactFormOpen: () => void
}

export interface FloatingContactButtonRef {
  openContactOptions: () => void
}

export const FloatingContactButton = forwardRef<FloatingContactButtonRef, FloatingContactButtonProps>(
  ({ onContactFormOpen }, ref) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => {
      setIsOpen(!isOpen)
    }

    const openContactOptions = () => {
      setIsOpen(true)
      // Auto close after 5 seconds to not be intrusive
      setTimeout(() => {
        setIsOpen(false)
      }, 5000)
    }

    useImperativeHandle(ref, () => ({
      openContactOptions,
    }))

    const contactOptions = [
      {
        icon: <Calendar className="w-5 h-5" />,
        label: "Schedule Call",
        action: () => {
          setIsOpen(false)
          window.open("https://calendly.com/itsishantgupta/project-discussioon", "_blank")
        },
        color: "from-indigo-500 to-purple-500",
      },
      {
        icon: <Mail className="w-5 h-5" />,
        label: "Email Us",
        action: () => {
          setIsOpen(false)
          window.location.href =
            "mailto:myuworkacc174@gmail.com?subject=Project Inquiry&body=Hi, I would like to discuss a project with you."
        },
        color: "from-blue-500 to-cyan-500",
      },
      {
        icon: <Phone className="w-5 h-5" />,
        label: "WhatsApp",
        action: () => {
          setIsOpen(false)
          window.open("https://wa.me/+917018512123?text=Hi, I would like to discuss a project with you.", "_blank")
        },
        color: "from-green-500 to-emerald-500",
      },
      {
        icon: <Send className="w-5 h-5" />,
        label: "Contact Form",
        action: () => {
          setIsOpen(false)
          onContactFormOpen()
        },
        color: "from-purple-500 to-pink-500",
      },
    ]

    return (
      <div className="fixed bottom-6 right-6 z-50">
        {/* Contact Options */}
        {isOpen && (
          <div className="absolute bottom-16 right-0 space-y-3 animate-in slide-in-from-bottom-2 duration-300">
            {contactOptions.map((option, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm"
              >
                <CardContent className="p-3">
                  <Button
                    onClick={option.action}
                    className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90 text-white border-0 justify-start gap-3 min-w-[140px]`}
                  >
                    {option.icon}
                    {option.label}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Main Floating Button */}
        <div className="relative">
          <Button
            onClick={handleToggle}
            size="lg"
            className={`w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 relative z-10 ${
              isOpen
                ? "bg-red-500 hover:bg-red-600"
                : "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            }`}
          >
            <div className={`transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
              {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
            </div>
          </Button>

          {/* Pulse Animation Ring */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20 pointer-events-none"></div>
          )}
        </div>
      </div>
    )
  },
)

FloatingContactButton.displayName = "FloatingContactButton"
