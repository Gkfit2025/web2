'use server'

import { z } from 'zod'

// Define a schema for form validation
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits.").max(15, "Phone number cannot exceed 15 digits."),
  date: z.string().min(1, "Please select a preferred date."),
  time: z.string().min(1, "Please select a preferred time."),
  reason: z.string().min(10, "Reason must be at least 10 characters.").max(500, "Reason cannot exceed 500 characters."),
})

export async function bookAppointment(prevState: any, formData: FormData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    date: formData.get('date'),
    time: formData.get('time'),
    reason: formData.get('reason'),
  }

  // Validate the form data
  const validatedFields = appointmentSchema.safeParse(data)

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your inputs.",
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 2000))

  // In a real application, you would save this data to a database
  // or send it to an external API.
  console.log("Appointment booked:", validatedFields.data)

  return {
    success: true,
    message: "Your appointment has been successfully booked! We will contact you shortly.",
    errors: {},
  }
}
