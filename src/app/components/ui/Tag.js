"use client";

import { useRouter } from "next/navigation";

const VARIANT = {
  white: {
    bg: "bg-white",
    hash: "text-blue",
    text: "text-black",
  },
  black: {
    bg: "bg-black",
    hash: "text-white",
    text: "text-white",
  },
  blue: {
    bg: "bg-blue",
    hash: "text-white",
    text: "text-white",
  },
};

export default function Tag({ variant = "white", text, href = "", usedFor = "" }) {
  const router = useRouter();

  const v = VARIANT[variant] ?? VARIANT.white;

  const onClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    router.push(`/portfolio/${href}`);
  };

  if (!text) return null;

  const layout =
    usedFor === "blog" ? "w-auto self-start absolute left-5 bottom-5 py-2" : "relative z-3 px-1.5 py-[7px] uppercase w-fit";

  return (
    <button type='button' onClick={onClick} className='inline-flex'>
      <span className={`${v.bg} cursor-pointer rounded-full inline-flex items-center px-3.8 ${layout}`}>
        <span className={`text-l bold pr-1 ${v.hash}`}># </span>
        <span className={`text-xxs ${v.text} `}>{text}</span>
      </span>
    </button>
  );
}
