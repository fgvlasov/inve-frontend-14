export default function Quote({text}) {
  return (
    <div className='container'>
      <div className='py-13 flex flex-row'>
        <svg className='shrink-0 mr-10.5'
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='12'
          viewBox='0 0 14 12'
          fill='none'
        >
          <path
            d='M9.25424 5.38787e-07L14 9.53674e-07L10.9153 12L7.35593 12L9.25424 5.38787e-07ZM1.89831 -1.04289e-07L6.64407 3.10598e-07L3.55932 12L-9.53674e-07 12L1.89831 -1.04289e-07Z'
            fill='black'
          />
        </svg>
        <p className='text-xl lowercase leading-5'>{text}</p>
      </div>
    </div>
  );
}
