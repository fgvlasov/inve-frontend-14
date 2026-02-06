const textWhite='text-inherit lg:text-6xl';
const textBlack='text-black lg:text-7xl';

export default function TitleH2({text, variant='white', subtext=''}) {
  return (
    <h2 className={`${variant==='white'? textWhite:textBlack} text-4xl tracking-tight
    flex flex-col shrink-0
    lg:text-7xl`}> {text}
      {subtext&&<span className='text-blue mt-3.8'>{subtext}</span>}
    </h2>
  )
}