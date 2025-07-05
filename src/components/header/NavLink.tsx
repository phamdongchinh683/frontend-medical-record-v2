import { IRoute } from "@/interfaces/IRoute";
import Link from "next/link";

export default function NavLink(item: IRoute) {
  return (
    <Link
      key={item.name}
      href={item.href}
      className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-rose-100 hover:text-pink-600 transition-colors duration-200"
    >
      {item.name}
    </Link>
  );
}
