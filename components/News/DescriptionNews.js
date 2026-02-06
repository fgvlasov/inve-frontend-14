import Image from "next/image";
import Link from "next/link";

export default function DescriptionNews({ linktext }) {
  return (
    <div className="pt-[52px]">
      <Image
        className="w-full aspect-[428/244]
      md:aspect-[834/322]
      lg:aspect-[1920/742] lg:max-h-[742px]"
        src="/image/content/new.png"
        width="428"
        // q={100}
        loading="lazy"
        height="244"
        alt=""
      />
      <div className="container py-13 pt-12">
        <h2 className="text-xl pb-[21px] leading-6.3">
          Первоначальный взнос — от 0%. Подобрать выгодную ставку, правильно
          заполнить анкету для заявки поможет ипотечный специалист компании.{" "}
        </h2>
        <p className="pb-18 leading-4 opacity-70">
          Подобрать выгодную ставку, правильно заполнить анкету для заявки
          поможет ипотечный специалист компании. Подать документы и получить
          положительное ипотечное решение можно дистанционно. Первоначальный
          взнос — от 0%. Подобрать выгодную ставку, правильно заполнить анкету
          для заявки поможет ипотечный специалист компании. Подать документы и
          получить положительное ипотечное решение можно дистанционно.{" "}
        </p>
        <Link className="text-blue underline" href="#">
          {linktext}
        </Link>
      </div>
    </div>
  );
}
