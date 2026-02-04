import { twMerge } from 'tailwind-merge';

export default function EnumCircle({ number, className }) {
  return (
    <span
      className={twMerge(
        'block min-w-[32px] min-h-[32px] max-h-[32px] max-w-[32px] rounded-full text-base leading-8 text-[#E4E4E4] font-arial font-normal text-center  bg-[#041314] align-middle',
        className
      )}
    >
      {number}
    </span>
  );
}
