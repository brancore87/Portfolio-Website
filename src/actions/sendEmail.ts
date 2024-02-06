"use server";

import ContactFormEmail from "../email/ContactFormEmail";

import React from "react";
import { Resend } from "resend";
import { getErrorMessage, validateString } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const senderMessage = formData.get("senderMessage");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }

  if (!validateString(senderMessage, 5000)) {
    return {
      error: "Invalid message email",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: `${senderEmail} <onboarding@resend.dev>`,
      to: "brancore87@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        senderEmail: senderEmail as string,
        senderMessage: senderMessage as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
