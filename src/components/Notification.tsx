import { INotification } from "@/interfaces/INotification";
import { CheckCircle, X, XCircle } from "lucide-react";

export default function Notification({
  notification,
  closeNotification,
}: {
  notification: INotification;
  closeNotification: () => void;
}) {
  if (!notification.type) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-transparent bg-opacity-50 transition-opacity"
        onClick={closeNotification}
      />

      <div className="relative bg-white rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 transform transition-all duration-300 scale-100 animate-in fade-in-0 zoom-in-95">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {notification.type === "success" ? (
              <CheckCircle className="h-8 w-8 text-green-500 mr-3" />
            ) : (
              <XCircle className="h-8 w-8 text-red-500 mr-3" />
            )}
            <h3
              className={`text-lg font-semibold ${
                notification.type === "success"
                  ? "text-green-800"
                  : "text-red-800"
              }`}
            >
              {notification.type === "success" ? "Success!" : "Error"}
            </h3>
          </div>
          <button
            onClick={closeNotification}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <p
          className={`text-sm ${
            notification.type === "success" ? "text-green-700" : "text-red-700"
          }`}
        >
          {notification.message}
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={closeNotification}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
              notification.type === "success"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            }`}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
