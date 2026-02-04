import { useRouter } from "next/router";
import TagItemSection from "../ui/TagItemSection";

export default function TagBlock({ tags = [] }) {
  const router = useRouter();
  return (
    <div className="container flex flex-wrap pb-6 pt-1.5 md:pb-0">
      {tags.map((tag) => (
        <TagItemSection
          key={tag.id}
          text={tag.attributes.Name}
          color="white"
          onClick={() => router.push(`/portfolio/${tag.attributes.slug}`)}
        />
      ))}
    </div>
  );
}
