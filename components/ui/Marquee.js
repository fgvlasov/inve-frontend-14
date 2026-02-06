"use client";

import { useContext } from "react";
import Loading from "./Loading";
import { GlobalContext } from "@/src/app/global-context";

export default function Marquee() {
  const global = useContext(GlobalContext);
  const marquee = global?.Marquee;

  if (!marquee) return <Loading />;

  return (
    <div className='relative flex overflow-x-hidden'>
      <div
        className='py-12 animate-marquee whitespace-nowrap text-6xl tracking-tight text-black-russian
        md:text-7xl md:py-10
        lg:text-10xl'
      >
        <span className='mx-4'>{marquee.Text1}</span>
        <span className='mx-4 text-blue'>/</span>
        <span className='mx-4'>{marquee.Text2}</span>
        <span className='mx-4 text-blue'>/</span>
        <span className='mx-4'>{marquee.Text3}</span>
        <span className='mx-4 text-blue'>/</span>
      </div>

      <div
        className='absolute top-0 py-12 animate-marquee2 whitespace-nowrap text-6xl tracking-tight text-black-russian
        md:text-7xl md:py-10
        lg:text-10xl'
      >
        <span className='mx-4'>{marquee.Text1}</span>
        <span className='mx-4 text-blue'>/</span>
        <span className='mx-4'>{marquee.Text2}</span>
        <span className='mx-4 text-blue'>/</span>
        <span className='mx-4'>{marquee.Text3}</span>
        <span className='mx-4 text-blue'>/</span>
      </div>
    </div>
  );
}
