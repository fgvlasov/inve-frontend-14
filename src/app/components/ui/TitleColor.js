export default function TitleColor({textPart1, textPart2, color='text-white'}) {
  return (
    <h2 className={`${color==='white'? 'text-white':'text-black'} text-4xl tracking-tight flex items-end
    lg:text-7xl`}> {textPart1}
      <span className='text-blue ml-2.5
      lg:ml-6'> {textPart2}</span>
    </h2>
  )
}