/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as nodemailer from "nodemailer";
import { type MailOptions } from "nodemailer/lib/json-transport";

import { env } from "~/env.mjs";

interface EmailContact {
    firstName:string;
    lastName:string;
    email:string;
    message:string;
}


export class Emailer {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: env.USER_GMAIL,
        pass: env.USER_GMAIL_PASS,
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  }

  public sendEmail(mailOptions: MailOptions) {
    return this.transporter.sendMail(mailOptions);
  }

//   public notifyAdminForNewUser({email, firstName, lastName, message}:EmailContact) {
//     this.sendEmail(notifyAdminNewUserEmailTemplate(email, firstName, lastName, message ));
//   }

  public contactMe({email, firstName, lastName, message}:EmailContact) {
    this.sendEmail(contactMeTemplate({email, firstName, lastName, message}));
  }
}

export const emailer = new Emailer();

export const contactMeTemplate = ({email, firstName, lastName, message}:EmailContact) => {
  return {
    from: env.USER_GMAIL,
    to: env.USER_PROTONMAIL,
    subject: `MAXIMEL - Message From ${firstName}`,
    text: message.slice(0, 20),
    html: `
      <p>EMAIL: ${email}</p>
      <p>NAME: ${firstName} ${lastName}</p>
      <p>MESSAGE: ${message}</p>
      <p></p>
      
    `,
  } as MailOptions;
};

// export const notifyAdminNewUserEmailTemplate = (
//     {email, firstName, lastName, message}:EmailContact
// ) => {
//   return {
//     from: process.env.GMAIL_USER,
//     to: process.env.GMAIL_USER,
//     subject: `New User: ${username} - email: ${email}`,
//     text: `New User: ${username} - email: ${email}`,
//     html: `
//       <h1>New User: ${username}</h1>
//       <p>email: ${email}</p>
//     `,
//   } as MailOptions;
// };