import Link from 'next/link';

export default function BreadCrumbsItem({title, path, active}) {
  return !active? (
    <li >
      <Link className='hover:text-nero
       p-2 pl-0 pr-1' href={path}>{title}</Link> <span className='pr-2'>/</span>
    </li>
  ):(
    <li className='p-2 pl-0'>
      <span >{title}</span>
    </li>
  );
}
