import { z } from 'zod';

export const estimateFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (minimum 2 characters)' })
    .max(100, { message: 'Name is too long' }),
  phone: z
    .string()
    .min(10, { message: 'Please enter a valid 10-digit phone number' })
    .regex(/^(\+?\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/, {
      message: 'Format must be (123) 456-7890 or 123-456-7890',
    }),
  serviceType: z.enum(
    ['Appliance Repair', 'Handyman Services', 'Commercial Kitchen', 'Property Upgrades'],
    {
      errorMap: () => ({ message: 'Please select a service type' }),
    }
  ),
  location: z
    .string()
    .min(3, { message: 'Please specify your South Florida city or Zip Code' })
    .max(100),
  problemDescription: z
    .string()
    .min(10, { message: 'Please describe your request (minimum 10 characters)' })
    .max(1000, { message: 'Description exceeds maximum length' }),
});

export type EstimateFormValues = z.infer<typeof estimateFormSchema>;
