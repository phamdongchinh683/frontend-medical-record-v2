export default function Step({
  index,
  step,
}: {
  index: number;
  step: {
    number: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div
      key={index}
      className="relative flex flex-col items-center bg-white/80 rounded-2xl shadow-xl border border-pink-100 px-8 py-10 transition-transform hover:-translate-y-1 hover:shadow-2xl group"
    >
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform">
        {step.number}
      </div>
      <h3 className="mt-10 text-xl font-bold text-gray-900 mb-4 tracking-tight group-hover:text-pink-600 transition-colors">
        {step.title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xs mx-auto group-hover:text-gray-800 transition-colors">
        {step.description}
      </p>
    </div>
  );
}
