export default function DescriptionServiceItem({
  textPart1 = "",
  textPart2 = "",
  textPart3 = "",
  textPart4 = "",
}) {
  return (
    <p className="font-interTight bg-inherit text-lg pt-6 flex flex-col leading-7">
      {textPart1} {textPart2 && <span>{textPart2}</span>}
      {textPart3 && <span>{textPart3}</span>}
      {textPart4 && <span>{textPart4}</span>}
    </p>
  );
}
