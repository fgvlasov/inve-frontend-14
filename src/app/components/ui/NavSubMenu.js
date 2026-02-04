import Link from "next/link";
import NavSubMenuItem from "./NavSubMenuItem";
import Loading from "./Loading";

export default function NavSubMenu({ menu, opened }) {
  if (!menu) {
    return <Loading />;
  }
  return (
    <ul
      className={`absolute left-8 min-w-[300px] min-h-[150px] bg-white rounded-[2px] p-6 z-50 ${
        !opened && "hidden"
      }`}
    >
      {menu
        .filter((item) => item.parent)
        .map((subItem) => (
          <NavSubMenuItem
            key={subItem.id}
            link={subItem.path}
            text={subItem.title}
          />
        ))}
    </ul>
  );
}
