import ModalFieldset from "../ui/ModalFieldset";
import ModalLabel from "../ui/ModalLabel";
import { useFormContext } from "react-hook-form";
import ModalInputForBrief from "../ui/ModalInputForBrief";

export default function ContactBrief() {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div
      className="mt-7
	  grid grid-cols-1 md:grid-cols-2 gap-5"
    >
      <h2
        className="mb-7 text-xl
      md:w-full md:col-span-2 
      lg:text-3.8xl"
      >
        Контактные данные
      </h2>
      <ModalFieldset>
        <ModalLabel htmlFor="Name" text="Имя" required={true} />

        <ModalInputForBrief
          type="text"
          id="Name"
          name="Name"
          placeholder="Введите ваше имя"
          error={errors.Name?.message}
          register={register}
          pattern={{ required: "This field is required" }}
        />
      </ModalFieldset>
      <ModalFieldset>
        <ModalLabel htmlFor="Phone" text="Телефон" required={true} />
        <ModalInputForBrief
          type="tel"
          id="Phone"
          name="Phone"
          placeholder="+7 (000) 000 00-00"
          error={errors?.Phone?.message}
          register={register}
          pattern={{ required: "Phone is required" }}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Email" text="E-mail" required={true} />
        <ModalInputForBrief
          type="email"
          id="Email"
          name="Email"
          placeholder="Введите ваш e-mail"
          error={errors.Email?.message}
          register={register}
          pattern={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          }}
        />
      </ModalFieldset>

      <ModalFieldset>
        <ModalLabel htmlFor="Company" text="Компания" required={true} />
        <ModalInputForBrief
          type="text"
          id="Company"
          name="Company"
          placeholder="Название вашей компании"
          error={errors?.Company?.message}
          register={register}
          pattern={{ required: "This field is required" }}
        />
      </ModalFieldset>
    </div>
  );
}
