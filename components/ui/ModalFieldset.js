export default function ModalFieldset({
  children,
  order = "order-1",
  brief = false,
  width = "w-5/12",
}) {
  return (
    <fieldset
      className={`${
        brief ? "flex-1" : "relative flex flex-wrap flex-col"
      } pb-6 md:${width} ${order}`}
    >
      {/*className={`relative flex flex-wrap flex-col pb-6 md:${width} ${order}`}*/}
      {children}
    </fieldset>
  );
}
