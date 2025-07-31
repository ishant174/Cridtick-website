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
    const [showTooltip, setShowTooltip] = useState(true)

    const handleToggle = () => {
      setIsOpen(!isOpen)
      setShowTooltip(false)
    }

    const openContactOptions = () => {
      setIsOpen(true)
      setShowTooltip(false)
      // Auto close after 5 seconds to not be intrusive
      setTimeout(() => {
        setIsOpen(false)
      }, 5000)
    }

    useImperativeHandle(ref, () => ({
      openContactOptions,
    }))

    // Hide tooltip after 10 seconds
    setTimeout(() => {
      setShowTooltip(false)
    }, 10000)

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
        {/* Attractive Tooltip/Speech Bubble */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-20 right-0 mb-2 animate-bounce">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg shadow-lg relative max-w-[200px] text-sm font-medium">
              🚀 Need a website? Get FREE quote in 24hrs!
              {/* Speech bubble arrow */}
              <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-purple-600"></div>
            </div>
          </div>
        )}

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

        {/* Main Floating Button with Text */}
        <div className="relative flex items-center gap-3">
          {/* Text beside button - only show when closed */}
          {!isOpen && (
            <div className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
              <span className="text-sm font-semibold whitespace-nowrap">💬 Let's Talk!</span>
            </div>
          )}

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
            <div className="absolute right-0 inset-0 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 animate-ping opacity-20 pointer-events-none"></div>
          )}
        </div>

        {/* Mobile-only bottom text */}
        {!isOpen && (
          <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap animate-pulse">
            Tap for FREE quote! 🚀
          </div>
        )}
      </div>
    )
  },
)

FloatingContactButton.displayName = "FloatingContactButton"
