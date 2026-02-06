export default function IntroDescription({ title, text }) {
  return (
    <div>
      <h3 className="AboutTitles uppercase pt-7 lg:pt-12 pb-7 lg:pt-7">
        {title}
      </h3>
      <p className="md:text-1xl leading-5">{text}</p>
    </div>
  );
}
