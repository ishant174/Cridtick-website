"use server"

import { Resend } from "resend"

const resend = new Resend("re_4uR6STMJ_6YgnciCvnw9iS6BgUALdi7JE")

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const company = formData.get("company") as string
  const projectType = formData.get("projectType") as string
  const message = formData.get("message") as string

  // Validate required fields
  if (!firstName || !lastName || !email || !message || !projectType) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    console.log("Attempting to send email with Resend...")

    // Send email using Resend with spam-friendly settings
    const { data, error } = await resend.emails.send({
      from: "Cridtick <onboarding@resend.dev>",
      to: ["contact@cridtick.com"],
      reply_to: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName} - Cridtick`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h1 style="color: #2563eb; margin: 0 0 10px 0; font-size: 24px;">New Contact Form Submission</h1>
            <p style="margin: 0; color: #6b7280;">Cridtick Portfolio Website</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Full Name:</strong><br>
              <span style="color: #6b7280;">${firstName} ${lastName}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Email Address:</strong><br>
              <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
            </div>
            
            ${
              company
                ? `
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Company:</strong><br>
              <span style="color: #6b7280;">${company}</span>
            </div>
            `
                : ""
            }
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Project Type:</strong><br>
              <span style="color: #6b7280;">${projectType}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Project Details:</strong><br>
              <div style="color: #6b7280; white-space: pre-wrap;">${message}</div>
            </div>

            <div style="text-align: center; margin: 20px 0;">
              <a href="mailto:${email}?subject=Re: Your Project Inquiry&body=Hi ${firstName},%0D%0A%0D%0AThank you for reaching out about your ${projectType} project.%0D%0A%0D%0A" 
                 style="background: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Reply to ${firstName}
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              <strong>Received:</strong> ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
              You can reply directly to this email to respond to ${firstName}
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission - Cridtick

Name: ${firstName} ${lastName}
Email: ${email}
${company ? `Company: ${company}` : ""}
Project Type: ${projectType}

Message:
${message}

Received: ${new Date().toLocaleString()}

You can reply directly to this email to respond to ${firstName}.
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: `Sorry, there was an error sending your message: ${error.message}. Please try again or contact us directly at contact@cridtick.com.`,
      }
    }

    console.log("Email sent successfully:", data)

    // Send confirmation email to the user with simplified design
    try {
      const confirmationResult = await resend.emails.send({
        from: "Cridtick <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Cridtick",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - Cridtick</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            
            <div style="background: #10b981; color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 20px;">
              <h1 style="margin: 0 0 10px 0; font-size: 28px;">Thank You, ${firstName}!</h1>
              <p style="margin: 0; font-size: 16px;">Your message has been received successfully</p>
            </div>
            
            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <p>Hi ${firstName},</p>
              
              <p>Thank you for reaching out to <strong>Cridtick</strong>! We're excited about the possibility of working together on your <strong>${projectType}</strong> project.</p>
              
              <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e293b;">What happens next?</h3>
                <ul style="margin-bottom: 0; padding-left: 20px;">
                  <li style="margin-bottom: 8px;">We'll review your project requirements carefully</li>
                  <li style="margin-bottom: 8px;">Our team will contact you within <strong>24 hours</strong></li>
                  <li style="margin-bottom: 8px;">We'll discuss your vision and provide initial recommendations</li>
                  <li style="margin-bottom: 0;">You'll receive a detailed project proposal</li>
                </ul>
              </div>
              
              <p><strong>Your Project Details:</strong></p>
              <ul style="background: #f9fafb; padding: 15px 20px; border-radius: 4px; margin: 15px 0;">
                <li><strong>Project Type:</strong> ${projectType}</li>
                ${company ? `<li><strong>Company:</strong> ${company}</li>` : ""}
                <li><strong>Contact Email:</strong> ${email}</li>
              </ul>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Visit our website at <a href="https://cridtick.com" style="color: #2563eb;">cridtick.com</a></li>
                <li>Connect with us on social media</li>
                <li>Reply to this email with any additional questions</li>
              </ul>
              
              <p>We're looking forward to bringing your digital vision to life!</p>
              
              <p>Best regards,<br>
              <strong>The Cridtick Team</strong><br>
              Professional Web Development & Digital Solutions</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Contact:</strong> contact@cridtick.com | <strong>Website:</strong> cridtick.com
              </p>
              <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                This is an automated confirmation. You can reply to this email if you have questions.
              </p>
            </div>
          </body>
          </html>
        `,
        text: `
Thank You, ${firstName}!

Thank you for reaching out to Cridtick! We're excited about your ${projectType} project.

What happens next:
- We'll review your requirements carefully
- Our team will contact you within 24 hours  
- We'll discuss your vision and provide recommendations
- You'll receive a detailed project proposal

Your Project Details:
- Project Type: ${projectType}
${company ? `- Company: ${company}` : ""}
- Contact Email: ${email}

We're looking forward to bringing your digital vision to life!

Best regards,
The Cridtick Team

Contact: contact@cridtick.com | Website: cridtick.com
        `,
      })

      if (confirmationResult.error) {
        console.warn("Confirmation email failed:", confirmationResult.error)
      } else {
        console.log("Confirmation email sent:", confirmationResult.data)
      }
    } catch (confirmationError) {
      console.warn("Confirmation email error:", confirmationError)
    }

    return {
      success: true,
      message:
        "Thank you for your message! We'll get back to you within 24 hours. Please check your email for confirmation.",
    }
  } catch (error) {
    console.error("Unexpected error sending email:", error)
    return {
      success: false,
      message: `Sorry, there was an unexpected error: ${error instanceof Error ? error.message : "Unknown error"}. Please try again or contact us directly at contact@cridtick.com.`,
    }
  }
}

export async function sendAuditRequest(formData: FormData) {
  const auditName = formData.get("auditName") as string
  const auditEmail = formData.get("auditEmail") as string
  const websiteUrl = formData.get("websiteUrl") as string
  const mainIssue = formData.get("mainIssue") as string

  // Validate required fields
  if (!auditName || !auditEmail || !websiteUrl || !mainIssue) {
    return {
      success: false,
      message: "Please fill in all required fields.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(auditEmail)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // Validate URL format
  try {
    new URL(websiteUrl)
  } catch {
    return {
      success: false,
      message: "Please enter a valid website URL.",
    }
  }

  try {
    console.log("Attempting to send audit request email...")

    // Send audit request email
    const { data, error } = await resend.emails.send({
      from: "Cridtick <onboarding@resend.dev>",
      to: ["contact@cridtick.com"],
      reply_to: auditEmail,
      subject: `Free Technical Audit Request from ${auditName} - Cridtick`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Technical Audit Request</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          
          <div style="background: #dc2626; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <h1 style="margin: 0 0 10px 0; font-size: 24px;">🔧 Free Technical Audit Request</h1>
            <p style="margin: 0; opacity: 0.9;">Cridtick - Technical Analysis</p>
          </div>
          
          <div style="background: white; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            
            <div style="margin-bottom: 15px; padding: 10px; background: #fef2f2; border-radius: 4px; border-left: 4px solid #dc2626;">
              <strong style="color: #374151;">Website to Audit:</strong><br>
              <a href="${websiteUrl}" style="color: #dc2626; text-decoration: none; font-weight: bold;">${websiteUrl}</a>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Client Name:</strong><br>
              <span style="color: #6b7280;">${auditName}</span>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #f9fafb; border-radius: 4px;">
              <strong style="color: #374151;">Email Address:</strong><br>
              <a href="mailto:${auditEmail}" style="color: #dc2626; text-decoration: none;">${auditEmail}</a>
            </div>
            
            <div style="margin-bottom: 15px; padding: 10px; background: #fef2f2; border-radius: 4px; border-left: 4px solid #dc2626;">
              <strong style="color: #374151;">Main Technical Issue:</strong><br>
              <span style="color: #6b7280; font-weight: bold;">${mainIssue.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</span>
            </div>

            <div style="background: #f0f9ff; padding: 15px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #3b82f6;">
              <h3 style="margin: 0 0 10px 0; color: #1e40af;">📋 Next Steps:</h3>
              <ul style="margin: 0; padding-left: 20px; color: #374151;">
                <li>Visit and analyze the website</li>
                <li>Check for technical issues and performance problems</li>
                <li>Prepare detailed audit report</li>
                <li>Send report within 24 hours</li>
              </ul>
            </div>

            <div style="text-align: center; margin: 20px 0;">
              <a href="mailto:${auditEmail}?subject=Your Free Technical Audit Report&body=Hi ${auditName},%0D%0A%0D%0AThank you for requesting a technical audit for ${websiteUrl}.%0D%0A%0D%0APlease find your detailed audit report attached.%0D%0A%0D%0ABest regards,%0D%0ACridtick Team" 
                 style="background: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
                Send Audit Report to ${auditName}
              </a>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
            <p style="margin: 0; color: #6b7280; font-size: 14px;">
              <strong>Received:</strong> ${new Date().toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                timeZoneName: "short",
              })}
            </p>
            <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
              Priority: Technical Audit Request - 24 Hour Delivery Promise
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
Technical Audit Request - Cridtick

Website to Audit: ${websiteUrl}
Client Name: ${auditName}
Email: ${auditEmail}
Main Issue: ${mainIssue.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}

Next Steps:
- Visit and analyze the website
- Check for technical issues and performance problems  
- Prepare detailed audit report
- Send report within 24 hours

Received: ${new Date().toLocaleString()}
Priority: Technical Audit Request - 24 Hour Delivery Promise
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        success: false,
        message: `Sorry, there was an error sending your audit request: ${error.message}. Please try again or contact us directly.`,
      }
    }

    console.log("Audit request sent successfully:", data)

    // Send confirmation email to the client
    try {
      const confirmationResult = await resend.emails.send({
        from: "Cridtick <onboarding@resend.dev>",
        to: [auditEmail],
        subject: "Your Free Technical Audit Request Received - Cridtick",
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Technical Audit Request Confirmed</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            
            <div style="background: #dc2626; color: white; padding: 30px; text-align: center; border-radius: 8px; margin-bottom: 20px;">
              <h1 style="margin: 0 0 10px 0; font-size: 28px;">🔧 Audit Request Received!</h1>
              <p style="margin: 0; font-size: 16px; opacity: 0.9;">We'll analyze your website within 24 hours</p>
            </div>
            
            <div style="background: white; padding: 30px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <p>Hi ${auditName},</p>
              
              <p>Thank you for requesting a <strong>Free Technical Audit</strong> from <strong>Cridtick</strong>! We're excited to help you identify and fix any technical issues on your website.</p>
              
              <div style="background: #fef2f2; padding: 20px; border-radius: 8px; border-left: 4px solid #dc2626; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #dc2626;">📋 Your Audit Details:</h3>
                <ul style="margin-bottom: 0; padding-left: 20px;">
                  <li><strong>Website:</strong> ${websiteUrl}</li>
                  <li><strong>Main Concern:</strong> ${mainIssue.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}</li>
                  <li><strong>Contact Email:</strong> ${auditEmail}</li>
                </ul>
              </div>
              
              <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #1e40af;">⚡ What Happens Next?</h3>
                <ul style="margin-bottom: 0; padding-left: 20px;">
                  <li>Our technical team will analyze your website thoroughly</li>
                  <li>We'll check for broken elements, performance issues, and security vulnerabilities</li>
                  <li>You'll receive a detailed report within <strong>24 hours</strong></li>
                  <li>The report will include a prioritized fix list with complexity estimates</li>
                </ul>
              </div>
              
              <p><strong>Your Technical Audit Will Include:</strong></p>
              <ul>
                <li>🔍 Broken elements identification</li>
                <li>⚡ Performance bottleneck analysis</li>
                <li>🛡️ Security vulnerability assessment</li>
                <li>📱 Mobile compatibility check</li>
                <li>🔧 Customization opportunities</li>
              </ul>
              
              <p>In the meantime, feel free to:</p>
              <ul>
                <li>Visit our website at <a href="https://cridtick.com" style="color: #2563eb;">cridtick.com</a></li>
                <li>Reply to this email with any additional concerns</li>
                <li>Schedule a call to discuss your requirements</li>
              </ul>
              
              <p>We're looking forward to helping you fix and improve your website!</p>
              
              <p>Best regards,<br>
              <strong>The Cridtick Team</strong><br>
              Professional Web Development & Digital Solutions</p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 15px; background: #f3f4f6; border-radius: 8px;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                <strong>Contact:</strong> contact@cridtick.com | <strong>Website:</strong> cridtick.com
              </p>
              <p style="margin: 5px 0 0 0; color: #6b7280; font-size: 12px;">
                This is an automated confirmation. You can reply to this email if you have questions.
              </p>
            </div>
          </body>
          </html>
        `,
        text: `
Hi ${auditName},

Thank you for requesting a Free Technical Audit from Cridtick!

Your Audit Details:
- Website: ${websiteUrl}
- Main Concern: ${mainIssue.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
- Contact Email: ${auditEmail}

What Happens Next:
- Our technical team will analyze your website thoroughly
- We'll check for broken elements, performance issues, and security vulnerabilities
- You'll receive a detailed report within 24 hours
- The report will include a prioritized fix list with complexity estimates

Your Technical Audit Will Include:
- Broken elements identification
- Performance bottleneck analysis
- Security vulnerability assessment
- Mobile compatibility check
- Customization opportunities

We're looking forward to helping you fix and improve your website!

Best regards,
The Cridtick Team

Contact: contact@cridtick.com | Website: cridtick.com
        `,
      })

      if (confirmationResult.error) {
        console.warn("Confirmation email failed:", confirmationResult.error)
      } else {
        console.log("Confirmation email sent:", confirmationResult.data)
      }
    } catch (confirmationError) {
      console.warn("Confirmation email error:", confirmationError)
    }

    return {
      success: true,
      message:
        "Thank you for your audit request! We'll analyze your website and send you a detailed technical report within 24 hours. Please check your email for confirmation.",
    }
  } catch (error) {
    console.error("Unexpected error sending audit request:", error)
    return {
      success: false,
      message: `Sorry, there was an unexpected error: ${error instanceof Error ? error.message : "Unknown error"}. Please try again or contact us directly.`,
    }
  }
}
