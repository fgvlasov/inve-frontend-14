import FormFieldset from './FormFieldset';
import TitleH3 from './TitleH3';
import FormButton from './FormButton';
import { FormProvider, useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { ToastrContext } from '../Toastr/ToastrProvider';
import { sendCallOrder } from 'lib/sendCallOrder';
import { useEnquiryForm } from 'lib/useEnquiryForm';
import InputMask from 'react-input-mask';
import { GlobalContext } from 'pages/_app';

function FormInput({ type, id, placeholder, name, pattern, register }) {
  const { mask } = useContext(GlobalContext);
  if (name === 'Phone') {
    return (
      <InputMask
        {...register(name, {
          pattern: {
            value: /^[^_]*$/,
            message: pattern.required,
          },
        })}
        className="w-full pt-[17px] pb-[14px] px-7 bg-nero rounded-lr mb-2.5 border-transparent
          xl:mb-0 xl:mr-7 xl:pb-5
          hover:border-white hover:border-opacity-40 hover:placeholder:text-white
          focus:border-white
          active:border-white active:outline-none"
        mask={mask}
        placeholder={placeholder}
        type={type}
      />
    );
  }

  return (
    <input
      className="w-full pt-[17px] pb-[14px] px-7 bg-nero rounded-lr mb-2.5 border-transparent
      xl:mb-0 xl:mr-7 xl:pb-5
      hover:border-white hover:border-opacity-40 hover:placeholder:text-white
      focus:border-white
      active:border-white active:outline-none"
      type={type}
      id={id}
      placeholder={placeholder}
      {...register(name, pattern)}
    />
  );
}

export default function FormService({ onSubmitForm }) {
  const methods = useForm();
  const checkUser = useEnquiryForm();
  const [loading, setLoading] = useState(false);
  const { setOpen, setSuccess, setMessage, Confirmation_Form_Brief } =
    useContext(ToastrContext);
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
      //console.log(isUser);
      if (isUser) {
        await sendCallOrder({ ...data, Agreement: true });
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
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        method="get"
        className="flex flex-col pt-6 max-w-[562px] m-auto items-center justify-center pb-2.5
      md:pt-[37px] 
      lg:max-w-none lg:px-10 lg:rounded-5xl lg:pb-[52px] lg:mt-9
      xl:border-[1px] xl:bg-nero2 border-eclipse "
      >
        <TitleH3
          text="Оставить заявку"
          subtext="на&#160;консультацию"
          variantColor="blue"
        />
        <FormFieldset>
          <FormInput
            id={'name'}
            name={'Name'}
            pattern={{ required: 'Name is required' }}
            register={methods.register}
            type="text"
            placeholder="Имя"
          />
          <FormInput
            type="tel"
            id="Phone"
            placeholder="Телефон*"
            name={'Phone'}
            pattern={{ required: 'Phone is required' }}
            register={methods.register}
          />
          <FormButton
            text="Отправить"
            loading={loading}
            disabled={!methods.formState.isValid}
          />
        </FormFieldset>
      </form>
    </FormProvider>
  );
}
