import PillowLink from "./PillowLink";

import { OrderCall } from "./OrderCall";

export default function FooterForm({ pillowColor }) {
  return (
    <div
      className='pb-10 pt-10.5  
    md:pt-16 md:pb-14
    lg:p-0 lg:mr-auto'
    >
      <div className='textWhite text-4xl tracking-tight flex flex-col lg:text-6xl shrink-1'>
        Есть проект?
        <span className='text-blue mt-2.5'>{t("footer.let_discuss")}</span>
      </div>

      <div
        className='flex flex-wrap gap-5 pt-9 
      md:pt-10.5 md:gap-6
      lg:pt-13'
      >
        <OrderCall variant={pillowColor} text='Заказать звонок' formTitle='Напишите телефон и мы Вам перезвоним' />
        <PillowLink
          text='Заполнить бриф'
          link='/brief'
          variant={pillowColor}
          linkPosition='footer'
          variantSvg={`${pillowColor}Svg`}
        />
      </div>
    </div>
  );
}
