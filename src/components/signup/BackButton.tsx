export default function BackButton({
  setCurrentStep,
  text,
}: {
  setCurrentStep: (step: number) => void;
  text: string;
}) {
  return (
    <button
      onClick={() => setCurrentStep(1)}
      className="text-gray-400 hover:text-gray-600 text-xl font-medium"
    >
      {text}
    </button>
  );
}
