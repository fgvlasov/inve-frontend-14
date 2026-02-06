const blue = "bg-royal-blue text-white";
const black = "bg-black-russian text-white uppercase";

export default function ButtonSubmit({
  text = "Оформить заявку",
  variant = "black",
  disabled = false,
  fullWidth = false,
  loading = false,
}) {
  return (
    <button
      disabled={disabled || loading}
      type="submit"
      className={`${variant === "blue" ? blue : black} w-full py-4.5 rounded-5xl
       ${fullWidth ? "" : "md:max-w-fit"} px-6
       ${disabled || loading ? "opacity-25" : ""}
       `}
    >
      {loading ? "Form sending..." : text}
    </button>
  );
}
