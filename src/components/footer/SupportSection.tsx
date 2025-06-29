import Link from "next/link";

export default function SupportSection() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-white mb-4 text-sm lg:text-base">
        Support
      </h4>
      <ul className="space-y-3 text-gray-400">
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            Help Center
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            Privacy
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            Terms
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            HIPAA
          </Link>
        </li>
      </ul>
    </div>
  );
}
