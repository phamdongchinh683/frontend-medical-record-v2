import navigation from "@/mocks/navigation.json";
import Link from "next/link";

export default function NavigationSection() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 hover:text-pink-600 transition-colors duration-200"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
}
