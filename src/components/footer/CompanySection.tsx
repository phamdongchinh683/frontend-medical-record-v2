import Link from "next/link";

export default function CompanySection() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-white mb-4 text-sm lg:text-base">
        Company
      </h4>
      <ul className="space-y-3 text-gray-400">
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            Press
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
