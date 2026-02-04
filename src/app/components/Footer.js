import FooterForm from "./ui/FooterForm";
import NavFooter from "./ui/NavFooter";
import Contact from "./ui/Contact";
import Copyright from "./ui/Copyright";
import Line from "./ui/Line";

export default function Footer({ variant, pillowColor = "dark", data, menu }) {
  const colorLine = variant === "black" ? "eclipse" : "grey";
  const colorSocials = variant === "black" ? "black" : "white";
  const footerClass =
    variant === "black"
      ? "bg-black text-white"
      : "bg-whisper text-black-russian";

  return (
    <footer
      className={`${footerClass} mx-auto pb-[38px] text-inherit shrink-0 w-full container`}
    >
      <div
        className="xl:flex 
      flex-wrap xl:justify-end xl:items-start lg:pt-10
      lg:mx-auto lg:pb-18"
      >
        <FooterForm pillowColor={pillowColor} />
        <NavFooter menu={menu} variant={variant} />
        <Contact contact={data} colorSocials={colorSocials} />
      </div>
      <Line variantColor={colorLine} />
      <Copyright />
    </footer>
  );
}
