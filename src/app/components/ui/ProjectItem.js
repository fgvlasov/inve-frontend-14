import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

export default function ProjectItem({name, link, children}) {
  const i18n = useTranslation();
  const locale = i18n.lang;
  return (
    <div
      className='w-full pb-5 mb-2.5 
    lg:mb-0 lg:pb-15'
    >
      <Link href={`project/${link}`}>
        {children}
        <h3
          className='text-xl text-black tracking-tight pb-[8px] border-b
    border-black-russian inline-block pt-3.8
    lg:text-3.8xl lg:pt-5'
        >
          {name}
        </h3>
      </Link>
    </div>
  );
}
