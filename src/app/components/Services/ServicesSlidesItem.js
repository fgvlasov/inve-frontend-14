export default function ServicesSlidesItem({ background, children }) {
  return (
    <div
      className="block rounded-5xl  bg-white w-full min-h-[219px] bg-no-repeat bg-cover bg-right p-6 md:min-w-[562px] lg:min-w-fit"
      style={{ backgroundImage: `url(${background})` }}
    >
      {children}
    </div>
  );
}
