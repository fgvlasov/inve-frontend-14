import TagItemBrief from "./TagItemBrief";

export default function TagsBrief({
  title,
  categories,
  setCategory,
  category,
}) {
  
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
      <div className="flex flex-wrap">
        {categories.map((elem) => (
          <TagItemBrief
            key={elem.attributes.name}
            color={
              category?.id == elem.id
                ? "blue"
                : "white"
            }
            text={elem.attributes.name}
            onClick={() => setCategory(elem)}
          />
        ))}
      </div>
    </div>
  );
}
