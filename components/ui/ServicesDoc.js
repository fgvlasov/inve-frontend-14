export default function ServicesDoc({ text }) {
  return (
    <div
      className="pb-3.8 pt-2.5
    lg:pt-0 lg:pb-2.5"
    >
      <span
        className={`bg-white  rounded-l15 px-3.8 py-1.2 inline-flex items-center uppercase  text-black-russian3 font-medium`}
      >
        <span className="text-l bold pr-1">{'#'}</span>
        <span className="text-xxs"> {text}</span>
      </span>
    </div>
  );
}
