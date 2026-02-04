import setLanguage from "next-translate/setLanguage";
import RadioButton from "./Radio";
import Line from "./Line";
import { useRouter } from 'next/router';

export default function Language({ lang }) {
  const router = useRouter();
  const setLanguageRu = () => {
    if (lang === "en") setLanguage("ru");
    //router.push("/");
  };

  const setLanguageEn = () => {
    if (lang === "ru") setLanguage("en");
    //router.push("/en");
  };
  return (
    <div
      className="group relative ml-auto
    md:order-2
    lg:flex lg:gap-1 lg:order-none lg:mr-auto lg:ml-0"
    >
      <button
        type="button"
        className="flex lg:hidden items-center p-2"
        onClick={setLanguageRu}
      >
        <span className="group-hover:opacity-50 uppercase">{lang}</span>
        <svg
          className="fill-gray ml-2.5 lg:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="5"
          viewBox="0 0 10 5"
        >
          <path fillRule="evenodd" clipRule="evenodd" d="m0 0 5 5 5-5H0Z" />
        </svg>
      </button>
      <button
        type="button"
        className="hidden lg:block p-2 "
        onClick={setLanguageRu}
      >
        <span className={lang === "en" ? "opacity-50" : ""}>RU</span>
      </button>
      <button type="button" className="hidden lg:block" onClick={setLanguageEn}>
        <span className={lang === "ru" ? "opacity-50" : ""}>EN</span>
      </button>
      <div className="absolute right-0 top-10 bg-white z-30 text-black py-2 invisible group-hover:visible lg:hidden">
        <RadioButton
          text="RU"
          id="ru"
          onClick={setLanguageRu}
          checked={lang === "ru"}
        />
        <Line variantColor="grey" />
        <RadioButton
          text="EN"
          id="en"
          onClick={setLanguageEn}
          checked={lang === "en"}
        />
      </div>
    </div>
  );
}