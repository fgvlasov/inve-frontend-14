const white='text-white';
const dark='text-black';

export default function IntroButton({text, variant='white', children}) {
  return (
    <button className='flex items-center mt-7'>
      <span className={`${variant === 'white'? white: dark} mr-5 text-sm`}>{text}</span>
      {children}
    </button>
  );
}
