import ArticleNew from "./ArticleNew";
import ProjectButton from "../ui/ProjectButton";

export default function NewsList({ news }) {
  return (
    <div className="container">
      <div
        className="py-25 pb-10
      lg:flex flex-wrap justify-between
      lg:py-16 lg:pb-0"
      >
        {news.map((item, key) => (
          <ArticleNew
            key={key}
            image={item.attributes.Image_preview}
            link={item.attributes.slug}
            tag={item.attributes.tag}
            title={item.attributes.Title}
            text={item.attributes.Preview}
            variant="colorInherit"
          />
        ))}
      </div>
      {/* <ProjectButton text="Загрузить еще" link="/news" /> */}
    </div>
  );
}
