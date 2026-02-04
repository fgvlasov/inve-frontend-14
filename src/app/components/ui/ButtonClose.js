export default function ButtonClose({ onClick }) {
  return (
    <button
      className="w-7 h-7 text-white fixed left-[70%] top-2"
      onClick={onClick}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <path
          d="M29.34.69a2.27 2.27 0 0 0-3.21 0L15 11.79 3.87.66a2.27 2.27 0 0 0-3.2 3.21L11.78 15 .66 26.13a2.27 2.27 0 0 0 3.21 3.2L15 18.22l11.13 11.13a2.27 2.27 0 1 0 3.2-3.21L18.22 15 29.34 3.87c.86-.86.86-2.32 0-3.18Z"
          fill="currentcolor"
        />
      </svg>
    </button>
  );
}
