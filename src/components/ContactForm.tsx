"use client";

import React, { useActionState, useCallback, useEffect, useState } from "react";
import { InputWithLabel } from "./InputWithLabel";
import { Button } from "./ui/button";
import { sendMail } from "@/actions/mailAction";
import { mailSchema } from "@/lib/schema/mailSchema";
import { z } from "zod/v4";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Check, X } from "lucide-react";

// Infer type from zod schema
type MailFormData = z.infer<typeof mailSchema>;

// server action return type
interface SendMailResponse {
  success: boolean;
  message: string;
  errors: Record<string, string[]> | null;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<MailFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [state, formAction, isPending] = useActionState<
    SendMailResponse,
    MailFormData
  >(sendMail, { success: false, message: "", errors: null });

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = mailSchema.safeParse(formData);
    if (!parsed.success) {
      const fieldErrors = z.flattenError(parsed.error).fieldErrors;
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    return formAction(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showCustomSuccessToast = useCallback(() => {
    toast.custom((t) => (
      <div className="flex items-center justify-between gap-3 bg-white dark:bg-neutral-900 px-4 py-3 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 min-w-[280px]">
        {/* Left Icon */}
        <Check className="text-green-500 w-5 h-5" />
        {/* Text */}
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-xs">
            Message sent successfully!
          </span>
          <span className="text-xs text-neutral-500 tracking-tight">
            We’ll get back to you shortly.
          </span>
        </div>

        {/* Custom Close Button */}
        <button
          onClick={() => toast.dismiss(t)}
          className="ml-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    ));
  }, []);

  const showCustomErrorToast = useCallback(() => {
    toast.custom((t) => (
      <div className="flex items-center justify-between gap-3 bg-white dark:bg-neutral-900 px-4 py-3 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 min-w-[280px]">
        {/* Left Icon */}
        <X className="text-red-500 w-5 h-5" />
        {/* Text */}
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-xs font-mono">
            {/* Message sending failed */}
            Failed to send message
          </span>
          <span className="text-xs text-neutral-500 font-mono tracking-tight">
            Something went wrong while sending the email
          </span>
        </div>

        {/* Custom Close Button */}
        <button
          onClick={() => toast.dismiss(t)}
          className="ml-2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    ));
  }, []);

  useEffect(() => {
    if (state.errors && Object.keys(state.errors).length >= 1) {
      setErrors(state.errors);
    }
    if (state.success) {
      showCustomSuccessToast();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else if (!state.success) {
      showCustomErrorToast();
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  }, [state, showCustomSuccessToast, showCustomErrorToast]);

  return (
    <form
      aria-labelledby="contact-form-heading"
      onSubmit={handleFormSubmit}
      className="max-sm:mt-6 flex flex-col gap-y-4 items-center"
    >
      <h3
        id="contact-form-heading"
        className="font-semibold text-lg text-center"
      >
        Send a Message
      </h3>
      {Object.entries(formData)?.map(([key, value]) => {
        return (
          <InputWithLabel
            key={key}
            label={key}
            value={value}
            setValue={handleInputChange}
            error={errors[key]}
          />
        );
      })}

      <Button
        size="lg"
        type="submit"
        className={cn(
          "w-full h-10 mt-3 max-w-sm cursor-pointer",
          isPending && "cursor-not-allowed opacity-70"
        )}
        disabled={isPending}
      >
        {isPending ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
