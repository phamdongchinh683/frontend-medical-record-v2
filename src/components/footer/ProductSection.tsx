import navigation from "@/mocks/navigation.json";
import Link from "next/link";

export default function ProductSection() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-white mb-4 text-sm lg:text-base">
        Product
      </h4>
      <ul className="space-y-3 text-gray-400">
        {navigation.landingPage
          .filter((item) => item.name !== "Sign Up")
          .map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-pink-400 transition-colors duration-200 text-sm lg:text-base block"
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
