import { Input } from "./ui/input";
import { Label } from "./ui/label";
import React from "react";
import { Textarea } from "./ui/textarea";

export function InputWithLabel({
  label,
  value,
  setValue,
  error,
}: {
  label: string;
  value: string;
  setValue: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  error?: string[];
}) {
  return (
    <div className="relative grid w-full max-w-sm items-center gap-2">
      <Label htmlFor={label}>
        {String(label).slice(0, 1).toUpperCase() + String(label).slice(1)}
      </Label>
      {label !== "message" ? (
        <Input
          type={label !== "email" ? "text" : "email"}
          id={label}
          name={label}
          placeholder={
            String(label).slice(0, 1).toUpperCase() + String(label).slice(1)
          }
          value={value}
          onChange={setValue}
          className="text-sm"
        />
      ) : (
        <Textarea
          placeholder="Type your message here."
          id="message"
          name={label}
          className="max-h-60 text-sm"
          value={value}
          onChange={setValue}
        />
      )}
      {error && (
        <span className="absolute text-xs text-red-500 -bottom-4">{error}</span>
      )}
    </div>
  );
}
