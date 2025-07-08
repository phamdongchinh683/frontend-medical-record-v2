export default function InfoInput({
  type,
  placeholder,
  value,
  name,
  className,
  disabled,
  defaultValue,
}: {
  type: string;
  placeholder?: string;
  value?: string;
  name?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
}) {
  return (
    <input
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      name={name}
      defaultValue={defaultValue}
      className={`${
        className ??
        "px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 transition-colors duration-200"
      }`}
    />
  );
}
