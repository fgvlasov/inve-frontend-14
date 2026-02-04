import Link from "next/link";

export default function NavSubMenuItem({ link, text }) {
  return (
    <li>
      <Link
        className="text-black text-sl lg:tracking-tight lg:opacity-60 lg:hover:text-royal-blue lg:hover:border-b lg:hover:border-royal-blue"
        href={`/${link}`}
      >
        {text}
      </Link>
    </li>
  );
}
