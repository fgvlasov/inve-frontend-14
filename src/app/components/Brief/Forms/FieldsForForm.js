import ModalSelectForBrief from "../ModalSelectForBrief";
import ModalInputForBrief from "@/components/ui/ModalInputForBrief";
import ModalFieldset from "@/components/ui/ModalFieldset";
import ModalLabel from "@/components/ui/ModalLabel";
import { useFormContext } from "react-hook-form";

export default function FieldsForForm({ title, children, inputs }) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const renderFieldInputs = (fieldInput) => {
    return (
      <ModalFieldset key={fieldInput.name}>
        <ModalLabel
          htmlFor={fieldInput.name}
          text={fieldInput.label.text}
          required={fieldInput.label.required}
        />
        {fieldInput.type === "select" ? (
          <ModalSelectForBrief
            name={fieldInput.name}
            options={fieldInput.input.options}
          />
        ) : fieldInput.type === "counter" ? (
          children
        ) : (
          <ModalInputForBrief
            max={fieldInput?.input?.max}
            type={fieldInput.input.type}
            id={fieldInput.name}
            placeholder={fieldInput.input.placeholder}
            pattern={{ required: fieldInput.input.pattern }}
            name={fieldInput.name}
            error={errors[fieldInput.name] && fieldInput.input.error}
            register={register}
          />
        )}
      </ModalFieldset>
    );
  };

  return (
    <div
      className="pt-10.5
    md:pt-20 grid grid-cols-1 md:grid-cols-2 gap-5	"
    >
      <h2
        className="mb-7 text-xl
      md:w-full md:col-span-2 
      lg:text-3.8xl"
      >
        {title}
      </h2>

      {inputs.map(renderFieldInputs)}
    </div>
  );
}
