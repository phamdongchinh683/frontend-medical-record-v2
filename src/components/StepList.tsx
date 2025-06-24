import steps from "@/mocks/steps.json";
import Step from "./Step";

export default function StepList() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-rose-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Get Started in Minutes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up your digital medical records is simple and secure. Follow
            these three easy steps to get started.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Step key={index} index={index} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
