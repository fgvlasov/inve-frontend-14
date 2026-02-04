import Link from "next/link";
import Loading from "./Loading";
import NavSubMenu from "./NavSubMenu";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Nav({ menu }) {
  const [menuOpened, setMenuOpened] = useState(false);
  const router = useRouter();
  if (!menu) {
    return <Loading />;
  }
  //console.log(menu);

  return (
    <nav
      className="hidden xl:block text-inherit
    lg:mr-auto xl:pl-0"
    >
      <ul
        className="flex items-center justify-between flex-wrap
      lg:gap-2.5"
      >
        {menu
          .filter((item) => !item.parent)
          .map((item) =>
            item.id == "15" ? (
              <li
                key={item.id}
                className="group relative"
                onMouseEnter={() => setMenuOpened(true)}
                onMouseLeave={() => setMenuOpened(false)}
              >
                <p className="p-5 flex items-center cursor-pointer">
                  <Link
                    href={item.path}
                    className={
                      item.path === router.asPath ? "active" : undefined
                    }
                  >
                    {item.title}
                  </Link>
                  <svg
                    className="w-[10px] ml-[8px] group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 10 7"
                  >
                    <path d="m1 1.3 4 4 4-4" stroke="#fff" />
                  </svg>
                </p>
                <NavSubMenu menu={menu} opened={menuOpened} />
              </li>
            ) : (
              <li key={item.id}>
                <Link
                  href={item.path}
                  className={`p-5 ${
                    item.path === router.asPath ? "underline color-blue" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            )
          )}
      </ul>
    </nav>
  );
}
