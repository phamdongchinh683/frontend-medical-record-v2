import { renderIcon } from "@/utils/iconMap";

export default function Record({ tokenId, timestamp }: { tokenId: string, timestamp: string }) {
  return (
    <>
      <div className="border border-pink-100 rounded-lg p-4 hover:bg-pink-50">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
              {renderIcon("FileText", { className: "h-5 w-5 text-white" })}
            </div>
            <div>
              <p className="text-sm text-gray-500">#{tokenId}</p>
              <p className="text-sm text-gray-500">{timestamp}</p>
            </div>
            <button className="p-2 text-pink-600 hover:bg-pink-100 rounded">
              {renderIcon("Eye", { className: "h-4 w-4" })}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
