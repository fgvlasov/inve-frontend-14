const white = "text-white";
const black = "text-black";

export default function TitleSection({
  text,
  variantColor = "black",
  children = undefined,
}) {
  return (
    <div
      className={`${
        variantColor === "black" ? black : white
      } container  pt-20 pb-10
        md:pt-18 md:pb-5
      lg:pt-12`}
    >
      <h1
        className="text-4xl tracking-tight
        md:text-6xl"
      >
        {children} {text}
      </h1>
    </div>
  );
}
