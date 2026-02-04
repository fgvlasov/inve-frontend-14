import { ARCHITECH_VIS, INTERIOR } from "./Forms/formFieldsCostants";

export const ProjectAngles = ({ setAngles, angles, category, projectType }) => {
  const addOne = () => {
    if (
      category?.attributes?.name === ARCHITECH_VIS &&
      projectType?.attributes?.name === INTERIOR
    ) {
      if (angles < 50) setAngles((prev) => prev + 1);
    }
    if (angles < 10) setAngles((prev) => prev + 1);
  };

  const subtractOne = () => {
    if (angles > 1) setAngles((prev) => prev - 1);
  };

  return (
    <div className="custom-number-input h-10.5 mt-3.8 w-full">
      <div className="flex flex-row h-10.5 rounded-5xl relative bg-transparent w-36">
        <button
          type="button"
          onClick={subtractOne}
          data-action="decrement"
          className=" bg-black-russian text-white hover:text-gray-700 hover:bg-gray-400 h-full w-2/6 rounded-l-5xl cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input
          type="number"
          disabled
          className="outline-none focus:outline-none text-center bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 w-2/6"
          name="custom-input-number"
          value={angles}
        />
        <button
          type="button"
          onClick={addOne}
          data-action="increment"
          className="bg-black-russian text-white hover:text-gray-700 hover:bg-gray-400 h-full w-2/6 rounded-r-5xl cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};
