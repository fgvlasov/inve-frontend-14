import Tag from "@/components/ui/Tag";
import ServicesSlidesButton from "./ServicesSlidesButton";
import ServicesSlidesItem from "./ServicesSlidesItem";
import { getStrapiMedia } from "@/lib/media";

/**
 * Презентационный компонент: данные приходят с сервера (props.slides).
 * Используется на страницах: contacts, about, portfolio, services.
 */
export default function ServicesSlides({ slides = [], from = "" }) {
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className={`flex flex-col gap-2.5 pb-6 md:flex-row md:overflow-hidden 
	lg:order-3 lg:w-full ${from === "About" && "contRightMargin"} `}
    >
      {slides.map((item) => (
        <ServicesSlidesItem key={item.id} background={getStrapiMedia(item.attributes.Slides?.BackgroundImage)}>
          <Tag text={item.attributes.Slides?.TypeofDocument} variant={item.attributes.Slides?.BlackTagBg ? "black" : "white"} />
          <div className={`text-xl tracking-tight text-${item.attributes.Slides?.BlackTagBg ? "black" : "white"} mt-5`}>
            {item.attributes.name}
          </div>
          <ServicesSlidesButton
            text={item.attributes.Slides?.DocumentTextForLink}
            link={getStrapiMedia(item.attributes.Slides?.Document)}
            variant={item.attributes.Slides?.BlackTagBg ? "black" : "white"}
          >
            <img
              src={getStrapiMedia(item.attributes.Slides?.SlidesIconLink)}
              width="37"
              height="37"
              alt=""
              loading="lazy"
            />
          </ServicesSlidesButton>
        </ServicesSlidesItem>
      ))}
    </div>
  );
}
