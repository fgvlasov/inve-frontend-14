import FooterNavItem from "./FooterNavItem";
import Loading from "./Loading";

export default function NavFooter({ menu, variant }) {
  if (!menu) {
    return <Loading />;
  }

  const borderColor =
    variant === "black" ? "footerNavBorderBlack" : "footerNavBorderWhite";
  return (
    <div
      className={`pb-5 lg:w-[445px] lg:mt-10.5 footerNav lg:pl-7 xl:pb-[59px] lg:self-stretch ${borderColor}`}
    >
      <ul
        className="grid 
      md:grid-cols-2 md:grid-rows-5 md:grid-flow-col md:max-w-[62%]
      lg:max-w-none
      "
      >
        {menu.map((item) => (
          <FooterNavItem key={item.id} text={item.title} link={item.path} />
        ))}
      </ul>
    </div>
  );
}
//lg:border-white/10
