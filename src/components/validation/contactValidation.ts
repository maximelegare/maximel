import { z } from "zod";

export const ContactSchema = z.object({
    email:z.string().email("please enter a valid email")
})
