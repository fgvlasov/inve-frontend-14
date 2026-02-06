import Title from "../ui/Title";

export default function ProjectsTitle() {
  return (

    <div className="flex flex-wrap justify-between
    lg:items-center lg:gap-5 lg:pb-[26px] lg:pt-2.5">
      <Title text="/ Проекты" variant="black" />
      <p className="order-last tracking-tight leading-[120%]  py-10  text-black w-full 
      md:pr-[50%] md:pb-[28px] md:pt-9
       lg:order-none lg:m-0 lg:p-0 lg:text-xl lg:w-[30%] lg:ml-auto
       lg:mr-25">
        Мы&nbsp;работаем с&nbsp;ведущими компаниями и&nbsp;брендами
        из&nbsp;различных отраслей. При создании могут решаться уникальные
        задачи, но&nbsp;это всегда проекты с&nbsp;характером
      </p>
      <Title text="® /. 22" variant="black" />
    </div>
  );
}
