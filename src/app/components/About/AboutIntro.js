import IntroDescription from "@/components/ui/IntroDescription";
import ServicesSlides from "@/components/Services/ServicesSlides";

export default function AboutIntro({ title1, text1, title2, text2 }) {
  return (
    <div
      className="pb-15 lg:flex flex-wrap max-w-[1746px]
    lg:mx-auto lg:pb-0 container"
    >
      <div className="lg:w-1/2 lg:pb-15 lg:pr-18">
        <IntroDescription title={title1} text={text1} />
      </div>

      <ServicesSlides from="About" />

      <div className="lg:w-1/2 lg:pl-18">
        <IntroDescription title={title2} text={text2} />
      </div>
    </div>
  );
}
