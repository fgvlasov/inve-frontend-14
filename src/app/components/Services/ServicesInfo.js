import Line from '../ui/Line';

export default function ServicesInfo() {
  return (
    <section className="container">
      <Line variantColor="bg-light-grey" />
      <div className="md:flex md:gap-5 lg:w-full lg:justify-center lg:gap-15">
        <div className="mt-9">
          <h2 className="font-arial font-normal text-2xl leading-7 text-black mb-5">
            Lorem ipsum dolor
          </h2>
          <p className="text-lg leading-[25px] font-normal font-arial text-black md:w-[390px] lg:w-[530px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div className="mb-9 mt-7">
          <h2 className="font-arial font-normal text-2xl leading-7 text-black mb-5">
            Lorem ipsum dolor
          </h2>
          <p className="text-lg leading-[25px] font-normal font-arial text-black md:w-[390px] lg:w-[530px]">
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut
            enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
          </p>
        </div>
      </div>
      <Line variantColor="bg-light-grey" />
    </section>
  );
}
