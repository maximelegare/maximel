/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { emailer } from "~/utils/emailer";

import { ContactFormSchema } from "../validation/contactForm";

export const contactFormRouter = createTRPCRouter({
  sendMessage: publicProcedure
    .input(ContactFormSchema)
    .mutation(async ({ input: { firstName, lastName, email, message } }) => {
      try {
        const res = await emailer.contactMe({
          email,
          firstName,
          lastName,
          message,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }

      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(message);
      return {
        res: "hello",
      };
    }),
});
