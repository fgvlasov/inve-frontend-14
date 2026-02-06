import NavItem from "./NavItem";
import Logo from "./Logo";
import PillowLink from "./PillowLink";
import Loading from "./Loading";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MobileSubMenu from "./MobileSubMenu";

export default function MobileMenu({ menu, onClose, handleOpenModal, isOpen }) {
  const [menuOpened, setMenuOpened] = useState(false);

  const openModal = () => {
    onClose();
    handleOpenModal();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!menu) {
    return <Loading />;
  }

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed flex opacity-30 flex-col z-20 top-0 left-0 right-0 h-screen overflow-hidden xl:hidden`}
      />
      <div
        className={`fixed flex  flex-col z-20 top-0 left-0 right-0 bg-white pt-[20px] pb-5 px-3.8 xl:hidden`}
      >
        <div className="flex justify-between items-center pb-7 color-black">
          <div onClick={onClose} className="cursor-pointer">
            <Logo color="black" />
          </div>
          <div onClick={onClose} className="cursor-pointer">
            <div className="">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_307_5508)">
                  <path
                    d="M9.57031 9.82019L30.43 30.6798"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M30.4297 9.82019L9.57004 30.6798"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_307_5508">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <nav className="pt-5 border-b border-eclipse border-opacity-20">
          <ul className="flex flex-col">
            {menu
              .filter((item) => !item.parent)
              .map((item) =>
                item.collapsed ? (
                  <span key={item.id}>
                    <li className="flex justify-between items-center border-t border-eclipse border-opacity-20">
                      <span onClick={onClose} className="flex-1">
                        <Link
                          href={item.path}
                          className="py-3.8 text-1xl text-black tracking-tight flex justify-between"
                        >
                          {item.title}
                        </Link>
                      </span>
                      <button
                        onClick={() => setMenuOpened(!menuOpened)}
                        className="px-2"
                      >
                        <svg
                          stroke="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                          className={`h-6 w-6 shrink-0 ${
                            menuOpened && "rotate-180"
                          }`}
                          data-testid="flowbite-accordion-arrow"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </li>
                    {menuOpened && (
                      <MobileSubMenu
                        menu={menu}
                        opened={menuOpened}
                        onClose={onClose}
                      />
                    )}
                  </span>
                ) : (
                  <span onClick={onClose} key={item.id}>
                    <NavItem text={item.title} link={item.path} />
                  </span>
                )
              )}
          </ul>
        </nav>
        <div className="flex justify-between pt-25">
          <div onClick={openModal}>
            <PillowLink
              text="Оставить заявку"
              link="#"
              variant="white"
              variantSvg="darkSvg"
            />
          </div>
          <Link
            href="tel:+78129092533"
            className="p-2.5 tracking-tight text-black  hover:text-suva-grey"
          >
            8&nbsp;812&nbsp;909&nbsp;25&nbsp;33
          </Link>
        </div>
      </div>
    </>
  );
}
