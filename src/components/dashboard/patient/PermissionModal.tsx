import Button from "@/components/Button";

export default function PermissionModal({
  setShowPermissionModal,
}: {
  setShowPermissionModal: (show: boolean) => void;
}) {
  return (
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md border border-pink-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            Grant Doctor Permission
          </h3>
          <Button
            type="button"
            value="x"
            className="font-bold text-2xl"
            onClick={() => setShowPermissionModal(false)}
          />
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Doctor wanted
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              placeholder="Enter doctor wanted"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Access Status
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option value="Granted">Granted</option>
              <option value="Revoked">Revoked</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Duration
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="180">6 months</option>
              <option value="365">1 year</option>
              <option value="permanent">Permanent</option>
            </select>
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => setShowPermissionModal(false)}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
