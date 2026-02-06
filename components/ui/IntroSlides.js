import IntroButton from "./IntroButton";
import IntroItem from "./IntroItem";
import Tag from "./Tag";

export default function IntroSlides() {
  return (
    <div
      className="flex flex-col gap-2.5 pt-7 pb-2.5 
    md:gap-5 md:flex-row md:overflow-hidden md:pb-10
    lg:order-3 lg:w-full
    lg:max-w-[1746px] mx-auto"
    >
      <IntroItem background="bg-[url('/image/content/flyer-paper-mockup.png')]">
        <Tag text1="pdf" />
        <h3 className="text-xl tracking-tight text-white mt-5">
          Архитектурная визуализация
        </h3>
        <IntroButton text="Скачать презентацию">
          <span className="button-round bg-black-russian2 mt-auto">
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1L5.5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="1"
                y1="9.25"
                x2="10"
                y2="9.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </IntroButton>
      </IntroItem>

      <IntroItem background="bg-[url('/image/content/video.png')]">
        <Tag text1="Showreel" />
        <h3 className="text-xl tracking-tight text-white mt-5">
          Моушн & Видеопродакшн
        </h3>
        <IntroButton text="Смотреть Showreel компании">
          <span className="button-round bg-black-russian2 mt-auto">
            <svg
              width="9"
              height="11"
              viewBox="0 0 9 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 4.63397C9.16667 5.01888 9.16667 5.98113 8.5 6.36603L1.75 10.2631C1.08333 10.648 0.25 10.1669 0.25 9.39711L0.250001 1.60289C0.250001 0.833085 1.08333 0.35196 1.75 0.73686L8.5 4.63397Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </IntroButton>
      </IntroItem>

      <IntroItem background="bg-[url('/image/content/home.png')]">
        <div className="bg-black  w-fit rounded-full px-[16px] py-[7px] inline-flex items-center relative z-20">
          <span className="bg-white rounded-full w-[4px] h-[4px] mr-[5px]"></span>
          <p className="text-xxs font-interTight uppercase font-medium  text-white">
            pdf
          </p>
        </div>

        <h3
          className="text-base mt-3.8  tracking-tight text-black 
        md:tracking-normal md:text-xl md:mt-3.8"
        >
          Продуктовая визуализация
        </h3>
        <IntroButton text="Скачать презентацию" variant="dark">
          <span className="button-round bg-royal-blue mt-auto">
            <svg
              width="11"
              height="10"
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 1L5.5 5L1 1"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <line
                x1="1"
                y1="9.25"
                x2="10"
                y2="9.25"
                stroke="currentColor"
                strokeWidth="1.5"
              />
            </svg>
          </span>
        </IntroButton>
      </IntroItem>
    </div>
  );
}
