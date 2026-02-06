"use client";

import FormFieldset from "./FormFieldset";
import TitleH3 from "./TitleH3";
import FormButton from "./FormButton";
import { FormProvider, useForm, Controller } from "react-hook-form";
import { useContext, useState } from "react";
import { ToastrContext } from "../Toastr/ToastrProvider";
import { sendCallOrder } from "@/lib/sendCallOrder";
import { useEnquiryForm } from "@/lib/useEnquiryForm";
import { IMaskInput } from "react-imask";
import { GlobalContext } from "@/src/app/global-context";

function TextInput({ type, id, placeholder, name, pattern, register }) {
  return (
    <input
      className='w-full pt-[17px] pb-[14px] px-7 bg-nero rounded-lr mb-2.5 border-transparent
        xl:mb-0 xl:mr-7 xl:pb-5
        hover:border-white hover:border-opacity-40 hover:placeholder:text-white
        focus:border-white
        active:border-white active:outline-none'
      type={type}
      id={id}
      placeholder={placeholder}
      {...register(name, pattern)}
    />
  );
}

function PhoneInput({ placeholder, control, name, rules }) {
  const { mask } = useContext(GlobalContext);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <IMaskInput
          mask={mask || "+{7} (000) 000-00-00"}
          value={field.value ?? ""}
          onAccept={(value) => field.onChange(value)}
          onBlur={field.onBlur}
          placeholder={placeholder}
          inputMode='tel'
          className='w-full pt-[17px] pb-[14px] px-7 bg-nero rounded-lr mb-2.5 border-transparent
            xl:mb-0 xl:mr-7 xl:pb-5
            hover:border-white hover:border-opacity-40 hover:placeholder:text-white
            focus:border-white
            active:border-white active:outline-none'
        />
      )}
    />
  );
}

export default function FormService({ onSubmitForm }) {
  const methods = useForm({
    mode: "onChange", // ✅ чтобы formState.isValid работал сразу
    defaultValues: { Name: "", Phone: "" },
  });

  const checkUser = useEnquiryForm();
  const [loading, setLoading] = useState(false);

  const { setOpen, setSuccess, setMessage, Confirmation_Form_Brief } = useContext(ToastrContext);

  const openSuccessToast = () => {
    setMessage(Confirmation_Form_Brief);
    setSuccess(true);
    setOpen(true);
  };

  const openErrorToast = () => {
    setSuccess(false);
    setOpen(true);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const isUser = await checkUser();

      if (isUser) {
        await sendCallOrder({ ...data, Agreement: true });
        openSuccessToast();
        if (onSubmitForm) onSubmitForm(data);
        methods.reset();
      } else {
        openErrorToast();
      }
    } catch (error) {
      console.log(error);
      openErrorToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method='get'
        className='flex flex-col pt-6 max-w-[562px] m-auto items-center justify-center pb-2.5
          md:pt-[37px] 
          lg:max-w-none lg:px-10 lg:rounded-5xl lg:pb-[52px] lg:mt-9
          xl:border-[1px] xl:bg-nero2 border-eclipse'
      >
        <TitleH3 text='Оставить заявку' subtext='на&#160;консультацию' variantColor='blue' />

        <FormFieldset>
          <TextInput
            id='name'
            name='Name'
            pattern={{ required: "Name is required" }}
            register={methods.register}
            type='text'
            placeholder='Имя'
          />

          <PhoneInput
            name='Phone'
            placeholder='Телефон*'
            control={methods.control}
            rules={{
              required: "Phone is required",
              validate: (value) => /^[^_]*$/.test(value || "") || "Phone is invalid",
            }}
          />

          <FormButton text='Отправить' loading={loading} disabled={!methods.formState.isValid || loading} />
        </FormFieldset>
      </form>
    </FormProvider>
  );
}
