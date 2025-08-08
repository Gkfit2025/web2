'use client'

import { useActionState, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { format } from 'date-fns'
import { CalendarIcon, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { bookAppointment } from '@/app/actions'

export function AppointmentForm() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [state, formAction, isPending] = useActionState(bookAppointment, {
    success: false,
    message: '',
    errors: {},
  })

  // Reset form and date after successful submission
  useEffect(() => {
    if (state.success) {
      setDate(undefined)
      // Optionally reset form fields here if needed,
      // but useActionState typically handles this for controlled inputs
    }
  }, [state.success])

  return (
    <section id="appointment" className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Book Your Appointment</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Please fill out the form below to request an appointment. Our team will contact you to confirm the details.
        </p>
        <form action={formAction} className="space-y-6 p-6 border rounded-lg shadow-md bg-gray-50">
          <div>
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" name="name" placeholder="John Doe" required />
            {state.errors?.name && <p className="text-red-500 text-sm mt-1">{state.errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john.doe@example.com" required />
            {state.errors?.email && <p className="text-red-500 text-sm mt-1">{state.errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" name="phone" type="tel" placeholder="+91 9876543210" required />
            {state.errors?.phone && <p className="text-red-500 text-sm mt-1">{state.errors.phone}</p>}
          </div>
          <div>
            <Label htmlFor="date">Preferred Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <Input type="hidden" name="date" value={date ? format(date, "yyyy-MM-dd") : ''} />
            {state.errors?.date && <p className="text-red-500 text-sm mt-1">{state.errors.date}</p>}
          </div>
          <div>
            <Label htmlFor="time">Preferred Time</Label>
            <Input id="time" name="time" type="time" required />
            {state.errors?.time && <p className="text-red-500 text-sm mt-1">{state.errors.time}</p>}
          </div>
          <div>
            <Label htmlFor="reason">Reason for Appointment</Label>
            <Textarea id="reason" name="reason" placeholder="Briefly describe your reason for appointment..." rows={4} required />
            {state.errors?.reason && <p className="text-red-500 text-sm mt-1">{state.errors.reason}</p>}
          </div>

          {state.message && (
            <div className={`mt-4 p-3 rounded-md text-center ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {state.message}
            </div>
          )}

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Booking...
              </>
            ) : (
              'Book Appointment'
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
