import {
  ANIMATION,
  ARCHITECH_VIS,
  EXTERIOR,
  INTERIOR,
  MOTION,
  VIDEO_KEY,
} from "./Forms/formFieldsCostants";
import TagItemBrief from "./TagItemBrief";

const categories = [
  { attributes: { name: INTERIOR } },
  { attributes: { name: EXTERIOR } },
  { attributes: { name: ANIMATION } },
  { attributes: { name: VIDEO_KEY } },
];

export default function TagsBriefDirection({
  title,
  setDirection,
  direction,
  category,
}) {
  const drawDirectionOptions = () => {
    switch (category?.attributes?.name) {
      case ARCHITECH_VIS:
        return categories.map((elem, index) => (
          <TagItemBrief
            key={elem.attributes.name}
            color={
              direction?.attributes?.name === elem.attributes.name
                ? "blue"
                : "white"
            }
            text={elem.attributes.name}
            onClick={index < 2 ? () => setDirection(elem) : null}
            className={index < 2 ? "" : "opacity-25"}
          />
        ));
      case MOTION:
        return categories.map((elem, index) => (
          <TagItemBrief
            key={elem.attributes.name}
            color={
              direction?.attributes?.name === elem.attributes.name
                ? "blue"
                : "white"
            }
            text={elem.attributes.name}
            onClick={index > 1 ? () => setDirection(elem) : null}
            className={index > 1 ? "" : "opacity-25"}
          />
        ));

      default:
        return categories.map((elem) => (
          <TagItemBrief
            key={elem.attributes.name}
            color={"white"}
            text={elem.attributes.name}
            onClick={null}
            className="opacity-25"
          />
        ));
    }
  };

  return (
    <div
      className="pt-10 pb-1.5
    md:pt-15"
    >
      <h2
        className="mb-7 text-xl
      md:text-1xl
      lg:text-3.8xl"
      >
        {title}
      </h2>
      <div className="flex flex-wrap">{drawDirectionOptions()}</div>
    </div>
  );
}
