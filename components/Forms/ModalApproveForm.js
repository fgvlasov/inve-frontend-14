import Link from "next/link";
import { InputErrorMessage } from "../ui/InputErrorMessage";
import { useFormContext } from "react-hook-form";

export default function ModalApproveForm({ fullWidth = false, name }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`relative flex pb-4 items-center md:pt24 ${
        fullWidth ? "w-full" : "md:w-3/5 lg:max-w-[422px]"
      }`}
    >
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          name={name}
          {...register(name, { required: "This field required" })}
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          className="w-6 h-6 text-blue-600 bg-gray-100 border-2  border-link-water rounded focus:ring-blue-500 focus:ring-2"
        />
      </div>
      <div className="ml-3.8 text-sm text-left leading-[164%] opacity-50">
        <label htmlFor="helper-checkbox">
          Согласен на обработку и передачу персональных данных в соответствии с
          <Link href="#" className="underline">
            {" "}
            Пользовательским соглашением
          </Link>
        </label>
      </div>
      {errors[name]?.message && (
        <InputErrorMessage message={errors[name].message} />
      )}
    </div>
  );
}
