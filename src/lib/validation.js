import * as z from 'zod'
export const contactMessage = z.object({
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  first_name: z.string().min(1, 'First name is required'),
  last_name: z.string().min(1, 'Last name is required'),
  message: z
    .string()
    .min(1, 'Message is required')
    .max(250, 'Message must not exceed 250 characters'),
  website: z.string().url().optional(),
})
