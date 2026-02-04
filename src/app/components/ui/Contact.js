import Socials from "./Socials";
import Logo from "./Logo";
import Link from "next/link";
import Loading from "./Loading";

export default function Contact({ contact, colorSocials }) {
  if (!contact) {
    return <Loading />;
  }

  return (
    // xl:border-l-1   xl:border-white/10
    <div
      className="pb-3.8 md:pb-9 
    lg:w-[445px] lg:pt-5 lg:pl-7 lg:pb-0 lg:self-stretch "
    >
      <ul
        className="flex flex-wrap pb-10 text-inherit text-lg items-center
        lg:items-start lg:flex-col lg:pb-0 lg:h-full lg:justify-between"
      >
        <li
          className="w-full pb-7
        md:pb-3.8
        lg:pb-7"
        >
          <Link
            href="/contacts"
            className="tracking-[-0.036em] text-lg opacity-50 flex items-start w-full p-2.5 pl-0 hover:opacity-100"
          >
            <svg
              className="mr-2.5"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.9995 0C3.93986 0 0.636719 3.30314 0.636719 7.3632C0.636719
               8.42222 0.853476 9.43334 1.28065 10.3687C3.12155 14.3971 6.65107
                18.6501 7.68921 19.8575C7.76699 19.9478 7.88038 19.9998
                 7.99971 19.9998C8.11904 19.9998 8.23243 19.9478 8.31021
                  19.8575C9.34794 18.6503 12.8775 14.3975 14.719 10.3687C15.1464
                   9.43334 15.3629 8.42222 15.3629 7.3632C15.3625 3.30314 12.0594
                    0 7.9995 0ZM7.9995 11.1877C5.89068 11.1877 4.17483 9.47182
                     4.17483 7.36299C4.17483 5.25396 5.89068
                      3.53812 7.9995 3.53812C10.1083 3.53812 11.8242 5.25396
                       11.8242 7.36299C11.8244 9.47182 10.1085 11.1877 7.9995 11.1877Z"
                fill="currentColor"
              />
            </svg>
            <span
              className="w-9/12 leading-[135%]
            lg:w-full"
            >
              {contact.attributes.Address}
            </span>
          </Link>
        </li>
        <li
          className="mr-10 text-lg tracking-[-0.036em]
        md:mr-29 
        lg:text-1xl lg:pb-1.5"
        >
          <Link href="tel:+78122010007"> {contact.attributes.Phone}</Link>
        </li>
        <li
          className="text-lg tracking-[-0.036em]
        md:mr-29
        lg:text-1xl lg:mb-10"
        >
          <Link href={`mailto:${contact.attributes.Email}`}>
            {contact.attributes.Email}
          </Link>
        </li>
        <li
          className="w-full mt-7 md:w-auto md:mt-0 lg:flex justify-between items-center
        lg:w-full"
        >
          <Socials
            links={contact.attributes.ContactSocials}
            variant={colorSocials}
          />
          <div
            className="hidden w-[116px] 
            lg:block lg:w-auto"
          >
            <Logo color="inherit" />
          </div>
        </li>
      </ul>
    </div>
  );
}
