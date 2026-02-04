import { FormProvider, useForm } from "react-hook-form";
import Image from "next/image";
import ModalLabel from "../ui/ModalLabel";
import ModalFieldset from "../ui/ModalFieldset";
import ButtonSubmit from "../ui/ButtonSubmit";
import ModalInputForBrief from "../ui/ModalInputForBrief";
import ModalApproveForm from "./ModalApproveForm";
import { useContext, useState } from "react";
import { sendCallOrder } from "lib/sendCallOrder";
import { ToastrContext } from "../Toastr/ToastrProvider";
import { useEnquiryForm } from "lib/useEnquiryForm";

const options = [
  {
    attributes: { Title: "Архитектурная 3D визуализация" },
  },
  {
    attributes: { Title: "Продуктовая 3D визуализация" },
  },
  {
    attributes: { Title: "Моушн & Видеопродакшн" },
  },
  {
    attributes: { Title: "3D моделирование" },
  },
];

export const FormOrderCall = ({ title, onClose }) => {
  const checkUser = useEnquiryForm();
  const [loading, setLoading] = useState(false);
  const methods = useForm();
  const { setOpen, setSuccess, setMessage, Confirmation_Form_Phone } =
    useContext(ToastrContext);
  const openSuccessToast = () => {
    setMessage(Confirmation_Form_Phone);
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
        await sendCallOrder(data);
        onClose();
        openSuccessToast();
      } else {
        openErrorToast();
      }
    } catch (error) {
      openErrorToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <img
        className="w-full bg-black min-h-[202px] object-cover rounded-t-5xl"
        src="/image/content/modal.png"
        width="398"
        height="202"
        loading="lazy"
        alt=""
      />
      <div className="px-10 pb-15 pt-9 text-center">
        <h2 className="text-xl pb-1.5">Заказать звонок</h2>
        <p className="pb-15">{title}</p>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <ModalFieldset width="w-full">
              <ModalLabel
                htmlFor="name"
                text="Имя"
                align="text-left"
                required={true}
              />
              <ModalInputForBrief
                type="text"
                id="name"
                placeholder="Введите ваше имя"
                name={"Name"}
                error={methods.formState.errors.name?.message}
                pattern={{ required: "This field is required" }}
                register={methods.register}
              />
            </ModalFieldset>

            <ModalFieldset width="w-full">
              <ModalLabel
                htmlFor="Phone"
                text="Телефон"
                align="text-left"
                required={true}
              />
              <ModalInputForBrief
                type="tel"
                id="Phone"
                placeholder="+7 (000) 000 00-00"
                error={methods.formState.errors.phone?.message}
                name={"Phone"}
                pattern={{ required: "Phone is required" }}
                register={methods.register}
              />
            </ModalFieldset>

            <ModalApproveForm name={"Agreement"} fullWidth />
            <ButtonSubmit
              disabled={!methods.formState.isValid}
              fullWidth
              loading={loading}
            />
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
