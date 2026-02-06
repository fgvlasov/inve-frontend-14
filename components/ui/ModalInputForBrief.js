"use client";

import { useContext } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import { InputErrorMessage } from "./InputErrorMessage";
import { GlobalContext } from "@/src/app/global-context";

export default function ModalInputForBrief({ type, id, placeholder, error, name, pattern, max = 50 }) {
  const { control, register } = useFormContext();
  const { mask } = useContext(GlobalContext);

  if (name === "Phone") {
    return (
      <>
        <Controller
          name={name}
          control={control}
          rules={{
            ...(pattern ?? {}),
            required: pattern?.required ?? "Phone is required",
            validate: (value) => /^[^_]*$/.test(value || "") || (pattern?.required ?? "Phone is invalid"),
          }}
          render={({ field }) => (
            <IMaskInput
              mask={mask || "+{7} (000) 000-00-00"}
              value={field.value ?? ""}
              onAccept={(value) => field.onChange(value)}
              onBlur={field.onBlur}
              placeholder={placeholder}
              inputMode='tel'
              className='py-3 px-5 w-full border border-link-water rounded-5xl lg:max-w-[422px] lg:py-3.8'
            />
          )}
        />
        {error && <InputErrorMessage message={error} />}
      </>
    );
  }

  return (
    <>
      <input
        className='py-3 px-5 w-full border border-link-water rounded-5xl lg:max-w-[422px] lg:py-3.8'
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, pattern)}
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? max : undefined}
        defaultValue={type === "number" ? 1 : ""}
      />
      {error && <InputErrorMessage message={error} />}
    </>
  );
}
