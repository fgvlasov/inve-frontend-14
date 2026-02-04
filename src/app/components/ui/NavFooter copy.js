import FooterNavItem from './FooterNavItem';

export default function NavFooter() {
  return (
    <div className='pb-5
    lg:mr-20 lg:pt-10.5'>
      <ul className='grid md:grid-cols-2 md:grid-rows-4 md:grid-flow-col lg:gap-x-15'>
        <FooterNavItem text='О студии' />
        <FooterNavItem text='Визуализация' />
        <FooterNavItem text='Анимация' />
        <FooterNavItem text='Моделирование' />
        <FooterNavItem text='Моушн' />
        <FooterNavItem text='Портфолио' />
        <FooterNavItem text='Контакты' />
      </ul>
    </div>
  )
}