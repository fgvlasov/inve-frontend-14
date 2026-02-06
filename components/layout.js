import Header from "./Header";
import Footer from "./Footer";

export default function Layout({
  bg,
  headerBg,
  footerBg,
  children,
  pillowColor,
  data,
  menu,
  header,
  headerContact,
  variantSvg = "whiteSvg",
}) {
  return (
    <div
      className={
        bg === "black"
          ? "bg-black text-white divLayout font-arial"
          : "bg-whisper text-black-russian divLayout min-h-screen font-arial flex flex-col justify-between"
      }
    >
      <Header variant={headerBg} variantSvg={variantSvg} menu={header} contactData={headerContact} />
      <main className="flex-1">{children}</main>
      <Footer variant={footerBg} pillowColor={pillowColor} data={data} menu={menu} />
    </div>
  );
}
