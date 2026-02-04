export default function FormFieldset({children}) {
  return (
    <fieldset
      className='flex flex-col pt-5
      md:pt-15 max-w-[562px] xl:flex-row items-center xl:justify-between
      xl:max-w-none xl:w-full xl:pt-12'
    >
      {children}
    </fieldset>
  );
}
