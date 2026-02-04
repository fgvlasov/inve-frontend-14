export default function Burger({ onClick, color }) {
  return (
    <div
      className="ml-10 md:order-3 xl:hidden group trans-default cursor-pointer"
      onClick={onClick}
    >
      <div className="HAMBURGER-ICON space-y-2 rotate-180">
        <span
          className={`bg-${
            color === "black" ? "white" : "black"
          } block h-0.7 w-10 animate-pulse   group-hover:bg-suva-grey`}
        ></span>
        <span
          className={`bg-${
            color === "black" ? "white" : "black"
          } block h-0.7 w-8 animate-pulse   group-hover:bg-suva-grey`}
        ></span>
        <span
          className={`bg-${
            color === "black" ? "white" : "black"
          } block h-0.7 w-10 animate-pulse   group-hover:bg-suva-grey`}
        ></span>
      </div>
    </div>
  );
}
