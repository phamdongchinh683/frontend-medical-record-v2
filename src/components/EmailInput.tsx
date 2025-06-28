export default function EmailInput({
  placeholder,
  value,
  name,
}: {
  placeholder: string;
  value?: string;
  name?: string;
}) {
  return (
    <input
      type="email"
      placeholder={placeholder}
      value={value}
      name={name}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 transition-colors duration-300"
    />
  );
}
