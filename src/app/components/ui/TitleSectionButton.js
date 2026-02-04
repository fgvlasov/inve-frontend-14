import PillowLinkTurn from './PillowLinkTurn';

const white = 'text-white';
const black = 'text-black';

export default function TitleSectionButton({
  text,
  variantColor = 'black',
}) {
  return (
    <div
      className={`${
        variantColor === 'black' ? black : white
      } container  py-10.5
        md:pt-18 md:pb-5
      lg:pt-12`}
    >
      <PillowLinkTurn text='Все новости' variant='transparentClasses' variantSvg='darkSvg'/>
      <h1
        className='text-4xl tracking-tight
        md:text-6xl'
      >
        {text}
      </h1>
    </div>
  );
}
