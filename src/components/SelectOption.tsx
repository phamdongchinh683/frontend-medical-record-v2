export default function SelectOption({
  options,
  name,
  value,
}: {
  value?: string;
  options: string[];
  name?: string;
}) {
  return (
    <div className="relative">
      <select
        className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 hover:border-pink-200 transition-all duration-200 bg-white text-gray-700 cursor-pointer appearance-none pr-10 shadow-sm "
        name={name}
        value={value}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="py-2 px-3"
          >
            {option}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}
