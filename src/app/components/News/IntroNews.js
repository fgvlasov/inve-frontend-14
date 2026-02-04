import TagItemSection from "../ui/TagItemSection";
import TagItemContainer from "../ui/TagItemContainer";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";
import { getStrapiMedia } from "lib/media";

export default function IntroNews({ blog }) {
  const router = useRouter();
  const onClickLink = (link) => {
    router.push(`/${link}`);
  };

  return (
    <div>
      <div className="container pt-3">
        <TagItemContainer>
          {blog.attributes.tag.data && (
            <TagItemSection
              text={blog.attributes.tag.data?.attributes?.Name}
              color="white"
              onClick={() =>
                onClickLink(blog.attributes.tag.data?.attributes?.slug)
              }
            />
          )}
          <TagItemSection
            text="Новости"
            color="white"
            onClick={() => onClickLink("news")}
          />
        </TagItemContainer>

        <div
          className="pt-[43px] pb-[30px] markDown mx-auto"
          dangerouslySetInnerHTML={{ __html: blog.attributes.Preview }}
        />
      </div>
      <img
        className="w-full "
        src={getStrapiMedia(blog.attributes.Poster)}
        width="1200"
        height="800"
        alt={blog.attributes.title}
        title={blog.attributes.title}
        loading="lazy"
        // quality={100}
      />
    </div>
  );
}
