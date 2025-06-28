export default function SelectOption({
  options,
  name,
}: {
  options: string[];
  name?: string;
}) {
  return (
    <select
      className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 transition-colors duration-300"
      name={name}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
