export default function BackButton({
  setCurrentStep,
}: {
  setCurrentStep: (step: number) => void;
}) {
  return (
    <button
      onClick={() => setCurrentStep(1)}
      className="text-gray-400 hover:text-gray-600 text-sm"
    >
      Change
    </button>
  );
}
