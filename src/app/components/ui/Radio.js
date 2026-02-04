export default function RadioButton({
  id,
  text,
  onClick = () => {},
  checked = false,
}) {
  return (
    <div className="flex items-center cursor-pointer px-2.5" onClick={onClick}>
      <input
        id={id}
        type="radio"
        value=""
        name="default-radio"
        onChange={onClick}
        checked={checked}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
      ></input>
      <label
        htmlFor={id}
        className="p-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer pr-36"
      >
        {text}
      </label>
    </div>
  );
}
