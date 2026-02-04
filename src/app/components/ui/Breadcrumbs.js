import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import BreadCrumbsItems from "./BreadcrumbsItem";

export default function BreadCrumbs({links}) {
  const {t}=useTranslation("common");
  return (
    <div className='pt-3 container
    md:pb-5
    lg:pb-10.5'
    >
      <ol className="flex flex-wrap text-base tracking-tight items-center opacity-50">
        <BreadCrumbsItems
          key="01"
          title={t("mainPage")}
          path="/"
          active={false}
        />
        {links.map((item, i) => (
          <BreadCrumbsItems
            key={i}
            title={item.title}
            active={i===links.length-1}
            path={item.path}
          />
        ))}
      </ol>
    </div>
  );
}
