/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";



import { ContactFormSchema } from "../validation/contactForm";

export const contactFormRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(ContactFormSchema)
    .query(({ input: { firstName, lastName, email, message } }) => {
      console.log("here")
      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(message);
      return {
        res: "hello",
      };
    }),
});
