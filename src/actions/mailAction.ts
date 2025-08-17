"use server";

import { z } from "zod/v4";
import { mailSchema } from "@/lib/schema/mailSchema";

export interface SendMailResponse {
  success: boolean;
  message: string;
  errors: Record<string, string[]> | null;
}

export async function sendMail(
  _: unknown,
  formData: z.infer<typeof mailSchema>
) {
  const parsed = mailSchema.safeParse(formData);
  if (!parsed.success) {
    console.log({
      success: false,
      message: "Validation failed",
      errors: z.flattenError(parsed.error).fieldErrors,
    });
    return {
      success: false,
      message: "Validation failed",
      errors: z.flattenError(parsed.error).fieldErrors,
    };
  }
  try {
    const data = new FormData();
    data.append("name", parsed.data.name);
    data.append("email", parsed.data.email);
    data.append("message", parsed.data.message);
    data.append("access_key", process.env.WEB3FORMS_KEY || "");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    console.log(result, "response");
    return {
      success: result.success,
      message: result.success
        ? "Message sent successfully"
        : "Message sending failed",
      errors: null,
    };
  } catch (error) {
    console.log(error, "error");
    return {
      success: false,
      message: "Something went wrong while sending the email",
      errors: null,
    };
  }
}
