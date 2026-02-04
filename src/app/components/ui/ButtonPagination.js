const blackText='text-black';
const whiteText='text-white'

export default function ButtonPagination({variant='white', children}) {
  return (
    <button
      className={`${variant=='white'? whiteText:blackText} w-15 h-15 flex flex-col justify-center items-center rounded-lr border  opacity-30 ml-[13px]
      group transition hover:opacity-100`}
      type='button'
      aria-label='Previous slide'
    >
      {children}
    </button>
  );
}
