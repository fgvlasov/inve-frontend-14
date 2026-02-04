export const InputErrorMessage = ({ message }) => {
  return message ? (
    <p className="absolute bottom-2 text-xs text-mandy p-0">{message}</p>
  ) : null;
};
