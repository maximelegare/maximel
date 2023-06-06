import { z } from "zod";

export const ContactSchema = z.object({
    email:z.string({required_error:"Please enter your email"}).email("please enter a valid email"),
    firstName:z.string({required_error:"Please enter your first Name"}),
    lastName:z.string({required_error:"Please enter your last name"}),
    message:z.string({required_error:"Please enter a message"})
})
