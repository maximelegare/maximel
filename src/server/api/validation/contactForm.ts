import {z} from "zod"

export const ContactFormSchema = z.object({
    firstName:z.string().trim(),
    lastName:z.string().trim(),
    email:z.string().email().trim(),
    message:z.string()
})