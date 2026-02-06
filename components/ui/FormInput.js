export default function FormInput({type, placeholder}) {
  return (
    <input
      className='w-full pt-[17px] pb-[14px] px-7 bg-nero rounded-lr mb-2.5 border-transparent
      xl:mb-0 xl:mr-7
      hover:border-white hover:border-opacity-40 hover:placeholder:text-white
      focus:border-white
      active:border-white active:outline-none'
      type={type}
      placeholder={placeholder}
    />
  );
}
