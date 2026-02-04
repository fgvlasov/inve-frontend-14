import Link from "next/link";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

export default function ModalApprove({ onApproveChange }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    setIsChecked(checked);
    onApproveChange && onApproveChange(checked);
  };

  return (
    <div
      className="flex pb-9 items-center
    md:pt-6 md:w-3/5
    lg:max-w-[422px]
    "
    >
      <div className="flex items-center h-5">
        <input
          id="helper-checkbox"
          aria-describedby="helper-checkbox-text"
          type="checkbox"
          {...register("Agreement")}
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-6 h-6 text-blue-600 bg-gray-100 border-2  border-link-water rounded focus:ring-blue-500 focus:ring-2"
        />
      </div>
      <div className="ml-3.8 text-sm text-left leading-[164%] opacity-50">
        <label htmlFor="helper-checkbox">
          Согласен на обработку и передачу персональных данных в соответствии с
          <Link href="/confidence" className="underline">
            {" "}
            Пользовательским соглашением
          </Link>
        </label>
      </div>
    </div>
  );
}
