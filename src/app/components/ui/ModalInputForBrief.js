import { useFormContext } from "react-hook-form";
import { InputErrorMessage } from "./InputErrorMessage";
import InputMask from "react-input-mask";
import { GlobalContext } from "pages/_app";
import { useContext } from "react";

export default function ModalInputForBrief({
  type,
  id,
  placeholder,
  error,
  register,
  name,
  pattern,
  max = 50,
}) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const { mask } = useContext(GlobalContext);

  if (name === "Phone") {
    return (
      <>
        <InputMask
          {...register(name, {
            pattern: {
              value: /^[^_]*$/,
              message: pattern.required,
            },
          })}
          className="py-3 px-5 w-full border border-link-water rounded-5xl
      lg:max-w-[422px] lg:py-3.8"
          mask={mask}
          placeholder={placeholder}
          type={type}
        />
        {error && <InputErrorMessage message={error} />}
      </>
    );
  }
  return (
    <>
      <input
        className="py-3 px-5 w-full border border-link-water rounded-5xl
      lg:max-w-[422px] lg:py-3.8"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, pattern)}
        min={type === "number" ? 0 : undefined}
        max={type === "number" ? max : undefined}
        defaultValue={type === "number" ? 1 : ''}
      />
      {error && <InputErrorMessage message={error} />}
    </>
  );
}
