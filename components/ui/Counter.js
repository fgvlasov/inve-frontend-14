export default function Counter() {

  return (
    <div className="custom-number-input h-10.5 mt-3.8 w-full">
      <div className="flex flex-row h-10.5 rounded-5xl relative bg-transparent w-36">
        <button
          data-action="decrement"
          onClick={handleDecrease}
          className=" bg-black-russian text-white hover:text-gray-700 hover:bg-gray-400 h-full w-2/6 rounded-l-5xl cursor-pointer outline-none"
        >
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        {children}
        <button
          data-action="increment"
          onClick={handleIncrease}
          className="bg-black-russian text-white hover:text-gray-700 hover:bg-gray-400 h-full w-2/6 rounded-r-5xl cursor-pointer"
        >
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
}
