import { renderIcon } from "@/utils/iconMap";

export default function SecurityNotice() {
  return (
    <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
      <div className="flex items-start space-x-3">
        {renderIcon("Shield", {
          className: "h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5",
        })}
        <div>
          <p className="text-sm font-medium text-blue-800">
            Your Security & Privacy
          </p>
          <p className="text-sm text-blue-700 mt-1">
            We use industry-leading encryption and HIPAA-compliant security
            measures to protect your medical data. Your information is never
            shared without your explicit consent.
          </p>
        </div>
      </div>
    </div>
  );
}
