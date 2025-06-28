import ConnectSection from "./ConnectSection";
import Logo from "./Logo";
import NavigationSection from "./NavigationSection";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <NavigationSection />
          <ConnectSection />
        </div>
      </div>
    </header>
  );
}
