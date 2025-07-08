export default function Button({
  type,
  value,
  name,
  onClick,
  className,
}: {
  type: string;
  value?: string;
  name?: string;
  className?: string;
  onClick?: () => void | undefined;
}) {
  return (
    <input
      type={type}
      value={value}
      name={name}
      onClick={onClick}
      className={`${
        className ??
        "w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all duration-300 font-semibold"
      }`}
    ></input>
  );
}
