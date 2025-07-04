import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Take Control of Your Health Data?
        </h2>
        <p className="text-xl text-pink-100 mb-8 leading-relaxed">
          Join thousands of patients and healthcare providers who trust
          MedRecords to keep their medical information secure and accessible.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href={"/signup"}
          className="bg-white text-pink-600 px-8 py-4 rounded-lg font-semibold hover:bg-pink-50 transition-colors shadow-lg"
        >
          Get Started
        </Link>
        <Link
          href={"/pricing"}
          className="border border-pink-300 text-white px-8 py-4 rounded-lg font-semibold hover:bg-pink-600 transition-colors"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
