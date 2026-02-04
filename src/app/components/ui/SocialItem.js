import Link from "next/link";

export default function SocialItem({ name, children, color, link }) {
  return (
    <li className="mr-2.5">
      <Link
        href={link}
        aria-label={name}
        className={`${color} py-3.8  w-[44px]
        rounded-l5 flex justify-center items-center h-[44px]`}
      >
        {children}
      </Link>
    </li>
  );
}
