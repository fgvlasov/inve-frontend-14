import { twMerge } from 'tailwind-merge';

export default function Checkbox({ checked, onChange, classname }) {
  return (
    <div
      className={twMerge(
        'relative w-6 h-6 rounded-md border-[#C9D6DF] border cursor-pointer select-none',
        classname
      )}
      onClick={() => onChange?.(!checked)}
    >
      {checked && (
        <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15.586L6.707 12.293L5.293 13.707L10 18.414L19.707 8.70697L18.293 7.29297L10 15.586Z" fill="#4574EF"/>
        </svg>
      )}
    </div>
  );
}
