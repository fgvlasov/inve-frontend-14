"use client";

import { FormProvider, useForm, Controller } from "react-hook-form";
import { useContext, useMemo, useState } from "react";
import { ToastrContext } from "../Toastr/ToastrProvider";
import { sendServiceConsultation } from "@/lib/sendServiceConsultation";
import { useEnquiryForm } from "@/lib/useEnquiryForm";
import { IMaskInput } from "react-imask";
import { GlobalContext } from "@/src/app/global-context";
import { twMerge } from "tailwind-merge";
import Checkbox from "./Checkbox";

function FormInput({ type, id, placeholder, name, label, register, rules, error }) {
  return (
    <div className='lg:p-0'>
      <label htmlFor={id} className='text-[15px] font-normal font-arial text-white flex mb-2'>
        {label}
        <span className='text-mandy text-[15px] ml-1'> *</span>
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={twMerge(
          "bg-white rounded-[30px] w-full md:w-[320px] placeholder:text-fiord placeholder:font-arial placeholder:font-normal text-black font-arial font-normal mb-10 py-[15px] pl-[20px] xl:w-[320px] xl:mb-0",
          "hover:border-white hover:border-opacity-40 hover:placeholder:text-white focus:border-white active:border-white active:outline-none",
          error ? "outline outline-2 outline-mandy" : "",
        )}
        {...register(name, rules)}
      />

      {error ? <p className='text-mandy text-sm mt-[-28px] mb-8'>{error}</p> : null}
    </div>
  );
}

function PhoneInput({ control, name, placeholder, label, error }) {
  const { mask } = useContext(GlobalContext);

  const maskValue = useMemo(() => mask || "+0 (000) 000-00-00", [mask]);

  return (
    <div className='lg:p-0'>
      <label htmlFor={name} className='text-[15px] font-normal font-arial text-white flex mb-2'>
        {label}
        <span className='text-mandy text-[15px] ml-1'> *</span>
      </label>

      <Controller
        control={control}
        name={name}
        rules={{
          required: "Phone is required",
          validate: (v) => {
            // базовая проверка: нет '_' и есть хотя бы 8 цифр
            if (!v) return "Phone is required";
            if (String(v).includes("_")) return "Fill the phone completely";
            const digits = String(v).replace(/\D/g, "");
            if (digits.length < 8) return "Phone is too short";
            return true;
          },
        }}
        render={({ field }) => (
          <IMaskInput
            {...field}
            id={name}
            mask={maskValue}
            placeholder={placeholder}
            // важно: чтобы RHF получал строку
            onAccept={(value) => field.onChange(value)}
            className={twMerge(
              "bg-white rounded-[30px] w-full md:w-[320px] placeholder:text-fiord placeholder:font-arial placeholder:font-normal text-black font-arial font-normal mb-10 py-[15px] pl-[20px] xl:w-[320px] xl:mb-0",
              "hover:border-white hover:border-opacity-40 hover:placeholder:text-white focus:border-white active:border-white active:outline-none",
              error ? "outline outline-2 outline-mandy" : "",
            )}
          />
        )}
      />

      {error ? <p className='text-mandy text-sm mt-[-28px] mb-8'>{error}</p> : null}
    </div>
  );
}

export default function FormConsultation({ service }) {
  const methods = useForm({
    mode: "onChange",
    defaultValues: {
      Name: "",
      Phone: "",
    },
  });

  const checkUser = useEnquiryForm();
  const [loading, setLoading] = useState(false);
  const [agreementCheck, setAgreementCheck] = useState(false);

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

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const isUser = await checkUser();
      if (isUser) {
        await sendServiceConsultation({ ...formData, Agreement: agreementCheck });
        openSuccessToast();
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

  const {
    formState: { isValid, errors },
    control,
  } = methods;

  return (
    <section className='container mt-15 pb-[70px] mb:pd-[70px] lg:pb-[180px]'>
      <div className='flex flex-col md:flex-row justify-start gap-20'>
        <h2 className='grow-0 w-[329px] xl:w-[494px] text-3.5xl leading-[30px] xl:text-4xl xl:leading-[46px] text-black-russian3 font-arial font-normal'>
          {service?.Title}
        </h2>

        {service ? (
          <div>
            {service.Form_Consult_text1 ? (
              <p className='whitespace-pre-wrap font-normal font-arial text-lg leading-[25px] text-black w-full mb-5 xl:w-[840px] xl:mb-7'>
                {service.Form_Consult_text1}
              </p>
            ) : null}

            {service.Form_Consult_text2 ? (
              <p className='whitespace-pre-wrap font-normal font-arial text-base leading-[25px] text-black opacity-60 w-full xl:w-[840px]'>
                {service.Form_Consult_text2}
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <div className="bg-black opacity-90 bg-[url('/image/content/bg-intro-mob.png')] md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 bg-no-repeat bg-cover rounded-[30px] w-full px-[35px] pt-[65px] pb-25 relative overflow-hidden xl:mt-15 lg:pl-[85px]">
        <span className='block absolute left-0 top-0 bg-[url(/image/svg/blueness_1.svg)] w-[250px] h-[250px] brightness-150' />
        <span className='hidden lg:block absolute left-0 bottom-0 bg-no-repeat bg-[url(/image/svg/blueness_2.svg)] w-[905px] h-[199px] brightness-150' />

        <div className='text-3.5xl leading-[30px] md:text-4xl md:leading-[40px] xl:text-[60px] xl:leading-[60px] text-white font-normal font-arial mb-5 text-center xl:text-left'>
          Отправить заявку
        </div>

        <p className='font-normal text-base leading-5 md:text-xl md:leading-[26px] xl:text-[22px] xl:leading-[28.6px] xl:w-[464px] mx-auto xl:m-0 font-arial text-center xl:text-left mb-16 text-white'>
          Оставьте свои контактные данные и мы <br />
          вышлем вам Коммерческое предложение
        </p>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className='mx-auto xl:m-0 flex flex-col items-center xl:items-start'>
            <div className='flex flex-col xl:flex-row xl:gap-5 xl:mt-[53px] lg:items-end'>
              <FormInput
                id='Name'
                name='Name'
                label='Имя'
                type='text'
                placeholder='Имя'
                register={methods.register}
                rules={{ required: "Name is required" }}
                error={errors?.Name?.message}
              />

              <PhoneInput control={control} name='Phone' label='Телефон' placeholder='Телефон*' error={errors?.Phone?.message} />

              <div className='group'>
                <button
                  type='submit'
                  disabled={!isValid || !agreementCheck || loading}
                  className='bg-blue py-[6.5px] pl-6 pr-1 flex rounded-6xl items-center group-hover:bg-white gap-[50px] w-fit mx-auto xl:m-0 disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  <span className='inline-block font-normal font-arial text-base text-white group-hover:text-black'>
                    {loading ? "Отправка..." : "Отправить"}
                  </span>

                  <span className='bg-white w-[37px] h-[37px] flex justify-center items-center rounded-full group-hover:bg-royal-blue ml-10 transition'>
                    <svg className='w-[9px] h-[15px]' viewBox='0 0 9 15'>
                      <path
                        d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                        stroke='black'
                        strokeWidth='1.5'
                        fill='transparent'
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            <div className='flex items-start mt-18 lg:mt-12'>
              <Checkbox classname='mr-4' checked={agreementCheck} onChange={(value) => setAgreementCheck(value)} />
              <div className='text-white opacity-20 font-normal font-arial text-sm leading-6 w-[295px] md:w-[440px] xl:w-full'>
                Согласен на обработку и передачу персональных данных в соответствии с
                <span className='text-white font-normal font-arial text-sm leading-6 underline ml-1'>
                  Пользовательским соглашением
                </span>
              </div>
            </div>
          </form>
        </FormProvider>
      </div>
    </section>
  );
}
