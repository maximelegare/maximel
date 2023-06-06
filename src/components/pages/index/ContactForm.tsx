import React from "react";
import { Input, Textarea } from "~/components/core/Input";

import { Section } from "~/components/core/Section";

import { useFormik } from "formik";

import { ContactSchema } from "~/components/validation/contactValidation";

import { toFormikValidationSchema } from "zod-formik-adapter";

export const ContactForm = () => {
  const { handleSubmit, touched, values, handleChange, errors, handleBlur } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
      validationSchema: toFormikValidationSchema(ContactSchema),
      onSubmit: (values) => {
        alert(JSON.stringify(values, null, 2));
      },
    });

  return (
    <Section bluredBackground styles="bg-black">
      <div className="grid grid-cols-2 gap-4">
        <form onSubmit={handleSubmit} className="flex w-full flex-col  gap-5">
          <div className="flex flex-grow gap-5">
            <Input
              label="First Name"
              placeholder="Please enter your first name"
              name="firstName"
              type="text"
              handleChange={handleChange}
              value={values.firstName}
              handleBlur={handleBlur}
              styles={`${
                errors.firstName && touched.firstName ? "input-error" : ""
              }`}
              error={
                errors.firstName && touched.firstName ? errors.firstName : undefined
              }
            />
            <Input
              label="Last name"
              placeholder="Please enter your last name"
              name="lastName"
              type="text"
              handleChange={handleChange}
              value={values.lastName}
              handleBlur={handleBlur}
              styles={`${
                errors.lastName && touched.lastName ? "input-error" : ""
              }`}
              error={
                errors.lastName && touched.lastName ? errors.lastName : undefined
              }
            />
          </div>
          <Input
            label="Email"
            placeholder="Please enter your email"
            name="email"
            type="email"
            handleChange={handleChange}
            value={values.email}
            handleBlur={handleBlur}
            styles={`${errors.email && touched.email ? "input-error" : ""}`}
            error={
                errors.email && touched.email ? errors.email : undefined
              }
          />
          <Textarea
            label="message"
            placeholder="Please enter a message"
            name="message"
            handleChange={handleChange}
            value={values.message}
            handleBlur={handleBlur}
            styles={`${errors.message && touched.message ? "input-error" : ""}`}
            error={
              errors.message && touched.message ? errors.message : undefined
            }
          />

          <button type="submit" className="btn">
            submit
          </button>
        </form>
        <div>test</div>
      </div>
    </Section>
  );
};