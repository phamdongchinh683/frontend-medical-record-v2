export default function InfoInput({
  type,
  placeholder,
  value,
  name,
}: {
  type: string;
  placeholder: string;
  value?: string;
  name?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      className="px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 transition-colors duration-300"
    />
  );
}
