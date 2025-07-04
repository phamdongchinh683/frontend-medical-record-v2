import { renderIcon } from "@/utils/iconMap";

export default function SuccessAction() {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center mb-4">
        {renderIcon("CheckCircle", {
          className: "h-8 w-8 text-green-600",
        })}
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Account Created Successfully!
      </h2>
      <p className="text-gray-600">
        Welcome to your secure healthcare platform
      </p>
    </div>
  );
}
