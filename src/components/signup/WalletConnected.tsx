import { IAccountBalance } from "@/interfaces/IAccountBalance";
import { renderIcon } from "@/utils/iconMap";

export default function WalletConnected({
  account,
}: {
  account: IAccountBalance;
}) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-lg">
          {renderIcon("Wallet", {
            className: "h-6 w-6 text-green-600",
          })}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Wallet Connected</h3>
          <p className="text-sm text-gray-600">
            Your account is secured by blockchain
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <div>
          <p className="text-sm font-medium text-gray-700">Wallet Address</p>
          <p className="text-sm text-gray-600 font-mono rounded border-none">
            {account.address.slice(0, 6)}...{account.address.slice(-4)}
          </p>
        </div>
      </div>
    </div>
  );
}
