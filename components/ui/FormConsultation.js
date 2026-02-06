import FormFieldset from './FormFieldset';
import TitleH3 from './TitleH3';
import FormButton from './FormButton';
import { FormProvider, useForm } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { ToastrContext } from '../Toastr/ToastrProvider';
import { sendServiceConsultation } from 'lib/sendServiceConsultation';
import { useEnquiryForm } from 'lib/useEnquiryForm';
import InputMask from 'react-input-mask';
import { GlobalContext } from 'pages/_app';

import { twMerge } from 'tailwind-merge';

import classNames from 'classnames';
import Checkbox from './Checkbox';
import ButtonSubmit from './ButtonSubmit';

function FormInput({ type, id, placeholder, name, pattern, register }) {
  const { mask } = useContext(GlobalContext);
  if (name === 'Phone') {
    return (
      <div className=" lg:p-0">
        <label
          htmlFor="name"
          className="text-[15px] font-normal font-arial text-white flex mb-2"
        >
          Имя<span className="text-mandy text-[15px] ml-1"> *</span>
        </label>
        <InputMask
          {...register(name, {
            pattern: {
              value: /^[^_]*$/,
              message: pattern.required,
            },
          })}
          className="bg-white rounded-[30px] w-full md:w-[320px] placeholder:text-fiord placeholder:font-arial placeholder:font-normal text-black font-arial font-normal mb-10 py-[15px] pl-[20px] xl:w-[320px] xl:mb-0
      
          hover:border-white hover:border-opacity-40 hover:placeholder:text-white
          focus:border-white
          active:border-white active:outline-none"
          mask={mask}
          placeholder={placeholder}
          type={type}
        />
      </div>
    );
  }

  return (
    <div className=" lg:p-0">
      <label
        htmlFor="name"
        className="text-[15px] font-normal font-arial text-white flex mb-2"
      >
        Имя<span className="text-mandy text-[15px] ml-1"> *</span>
      </label>
      <input
        className="bg-white rounded-[30px] w-full md:w-[320px] placeholder:text-fiord placeholder:font-arial placeholder:font-normal text-black font-arial font-normal mb-10 py-[15px] pl-[20px] xl:w-[320px] xl:mb-0
      hover:border-white hover:border-opacity-40 hover:placeholder:text-white
      focus:border-white
      active:border-white active:outline-none"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(name, pattern)}
      />
    </div>
  );
}

function RequestTexts({ className }) {
  return (
    <div className={twMerge('pb-18 xl:pb-0', className)}>
      <p className="font-normal font-arial text-lg leading-[25px] tracking-normal text-black w-full mb-5 mt-15 lg:w-[840px] lg:mb-7">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
      <p className="font-normal font-arial text-base leading-[25px] tracking-normal text-black opacity-60 w-full lg:w-[840px]">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
    </div>
  );
}

export default function FormConsultation({service}) {
  const methods = useForm();
  const checkUser = useEnquiryForm();
  const [loading, setLoading] = useState(false);
  const [agreementCheck, setAgreementCheck] = useState(false);
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
        await sendServiceConsultation({ ...data, Agreement: agreementCheck });
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
    <section className="container mt-15 pb-[70px] mb:pd-[70px] lg:pb-[180px]">
      <div className="flex flex-col md:flex-row  justify-start gap-20 ">
        <h2 className="grow-0 w-[329px] xl:w-[494px] text-3.5xl leading-[30px] xl:text-4xl xl:leading-[46px] text-black-russian3 font-arial font-normal">
          {service.Title}
        </h2>
        {service && (
          <div>
            {service.Form_Consult_text1 && (
              <p className="whitespace-pre-wrap font-normal font-arial text-lg leading-[25px] text-black w-full mb-5  xl:w-[840px] xl:mb-7">
                {service.Form_Consult_text1}
              </p>
            )}
            {service.Form_Consult_text2 && (
              <p className="whitespace-pre-wrap font-normal font-arial text-base leading-[25px] text-black opacity-60 w-full xl:w-[840px]">
                {service.Form_Consult_text2}
              </p>
            )}
          </div>
        )}
      </div>
      <div className="bg-black opacity-90 bg-[url('/image/content/bg-intro-mob.png')]  md:bg-[url('/image/content/bg-intro.png')] md:bg-right-top-30 bg-no-repeat bg-cover rounded-[30px] w-full px-[35px] pt-[65px] pb-25 relative overflow-hidden xl:mt-15 lg:pl-[85px]">
        <span className="block absolute left-0 top-0 bg-[url(/image/svg/blueness_1.svg)] w-[250px] h-[250px] brightness-150"></span>
        <span className="hidden lg:block absolute left-0 bottom-0 bg-no-repeat bg-[url(/image/svg/blueness_2.svg)] w-[905px] h-[199px] brightness-150"></span>
        <div className="text-3.5xl leading-[30px] md:text-4xl md:leading-[40px] xl:text-[60px] xl:leading-[60px] text-white font-normal font-arial mb-5 text-center xl:text-left">
          Отправить заявку
        </div>
        <p className="font-normal text-base leading-5 md:text-xl md:leading-[26px] xl:text-[22px] xl:leading-[28.6px] xl:w-[464px] mx-auto xl:m-0 font-arial text-center xl:text-left mb-16 text-white">
          Оставьте свои контактные данные и мы <br />
          вышлем вам Коммерческое предложение
        </p>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            method="get"
            className=" mx-auto xl:m-0 flex flex-col items-center xl:items-start"
          >
            <div className="flex flex-col xl:flex-row xl:gap-5 xl:mt-[53px] lg:items-end">
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
              <div className="group">
                <button
                  disabled={!methods.formState.isValid || !agreementCheck}
                  className="bg-blue py-[6.5px] pl-6 pr-1 flex rounded-6xl items-center  group-hover:bg-white gap-[50px] w-fit mx-auto xl:m-0"
                >
                  <span className="inline-block font-normal font-arial text-base text-white group-hover:text-black">
                    Отправить
                  </span>
                  <span className="bg-white w-[37px] h-[37px] flex justify-center items-center rounded-full group-hover:bg-royal-blue ml-10 transition">
                    <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
                      <path
                        d="M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416"
                        stroke="black"
                        strokeWidth="1.5"
                        fill="transparent"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-start mt-18 lg:mt-12">
              <Checkbox
                classname="mr-4"
                checked={agreementCheck}
                onChange={(value) => setAgreementCheck(value)}
              />
              <div className="text-white opacity-20 font-normal font-arial text-sm leading-6 w-[295px] md:w-[440px] xl:w-full">
                Согласен на обработку и передачу персональных данных в
                соответствии с
                <span className="text-white font-normal font-arial text-sm leading-6 underline ml-1">
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
