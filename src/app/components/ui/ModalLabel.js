export default function ModalLabel({htmlFor, text, required, align=''}) {
  return (
    <label className={`pb-2 text-fiord text-sl ${align}`} htmlFor={htmlFor}>
      {text}
      {required&&<span className="red">*</span>}
    </label>
  );
}
