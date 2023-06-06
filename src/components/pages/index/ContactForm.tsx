import React from "react";
import { Input } from "~/components/core/Input";

import { Section } from "~/components/core/Section";

import { useFormik } from "formik";

import { ContactSchema } from "~/components/validation/contactValidation";

import { toFormikValidationSchema } from "zod-formik-adapter";

export const ContactForm = () => {
  const onSubmit = () => {
    resetForm()
  };

  const { handleChange, values, handleSubmit, resetForm } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: toFormikValidationSchema(ContactSchema),
    onSubmit,
  });

  return (
    <Section bluredBackground styles="bg-black ">
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="text"
          value={values.email}
          handleChange={handleChange}
        />
        <input type="submit" value="submit" className="btn"/>
      </form>
    </Section>
  );
};
