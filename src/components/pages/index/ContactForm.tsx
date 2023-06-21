import React from "react";
import { Input, Textarea } from "~/components/core/Input";

import { Section } from "~/components/core/Section";

import { useFormik } from "formik";

import { ContactSchema } from "~/components/validation/contactValidation";

import { toFormikValidationSchema } from "zod-formik-adapter";
import { BigTitle } from "~/components/core/BigTitle";

import { IoIosPaperPlane } from "react-icons/io";

import { useTranslation } from "next-i18next";

import { api } from "~/utils/api";

export const ContactForm = () => {
  
  const mutation = api.contact.sendMessage.useMutation()
  const { t } = useTranslation("common");

  const {
    handleSubmit,
    touched,
    values,
    handleChange,
    errors,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: toFormikValidationSchema(ContactSchema),
    // alert(JSON.stringify(values, null, 2));
    onSubmit: (values) => {
      

      mutation.mutate(values)
      
      setTimeout(() => {
        resetForm();
        
        
      }, 1000);
    },
  });

  return (
    <Section bluredBackground styles="bg-black">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <BigTitle
            logoElement={<IoIosPaperPlane className="text-5xl" />}
            logo={{ alt: "", imageUrl: "" }}
            styles={{
              textAccent: "gradiant-text-green",
              accent: "gradiant-gray",
              titlePosition: "default",
            }}
            dotHighlight="gradiant-gray"
            title="Interested in what you see?"
            subtitleString="Don't be shy, contact me."
          />
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col  gap-5 rounded-md border-2 border-gray-800 bg-black p-6"
          >
            <div className="flex flex-grow gap-5">
              <Input
                label={t("index.contactForm.firstName.label") ?? ""}
                placeholder={t("index.contactForm.firstName.placeholder") ?? ""}
                name="firstName"
                type="text"
                handleChange={handleChange}
                value={values.firstName}
                handleBlur={handleBlur}
                styles={`${
                  errors.firstName && touched.firstName ? "input-error" : ""
                }`}
                error={
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : undefined
                }
              />
              <Input
                label={t("index.contactForm.lastName.label") ?? ""}
                placeholder={t("index.contactForm.lastName.placeholder") ?? ""}
                name="lastName"
                type="text"
                handleChange={handleChange}
                value={values.lastName}
                handleBlur={handleBlur}
                styles={`${
                  errors.lastName && touched.lastName ? "input-error" : ""
                }`}
                error={
                  errors.lastName && touched.lastName
                    ? errors.lastName
                    : undefined
                }
              />
            </div>
            <Input
              label={t("index.contactForm.email.label") ?? ""}
              placeholder={t("index.contactForm.email.placeholder") ?? ""}
              name="email"
              type="email"
              handleChange={handleChange}
              value={values.email}
              handleBlur={handleBlur}
              styles={`${errors.email && touched.email ? "input-error" : ""}`}
              error={errors.email && touched.email ? errors.email : undefined}
            />
            <Textarea
              rowsNumber={5}
              label={t("index.contactForm.message.label") ?? ""}
              placeholder={t("index.contactForm.message.placeholder") ?? ""}
              name="message"
              handleChange={handleChange}
              value={values.message}
              handleBlur={handleBlur}
              styles={`${
                errors.message && touched.message ? "textarea-error" : ""
              }`}
              error={
                errors.message && touched.message ? errors.message : undefined
              }
            />
            <button type="submit" className="btn">
              submit
            </button>
          </form>
        </div>
        <div>test</div>
      </div>
    </Section>
  );
};
