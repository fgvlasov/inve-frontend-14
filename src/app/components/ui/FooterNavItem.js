import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function FooterNavItem({text, link='#'}) {
  const i18n=useTranslation();
  const locale=i18n.lang;
  return (
    <li
      className='mb-[7px]
    lg:mb-2.5'
    >
      <Link
        className=' text-inherit text-base opacity-50 tracking-tight p-2.5 hover:opacity-100
       pl-0 trans-default lg:text-lg'
        href={`/${link}`}
      >
        {text}
      </Link>
    </li>
  );
}
