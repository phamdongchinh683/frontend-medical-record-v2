import { IAccountBalance } from "@/interfaces/IAccountBalance";
import { renderIcon } from "@/utils/iconMap";

export default function WalletConnected({
  account,
}: {
  account: IAccountBalance;
}) {
  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
      <div className="flex items-center space-x-3 ">
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-lg">
          {renderIcon("Wallet", {
            className: "h-6 w-6 text-green-600",
          })}
        </div>
        <div className="flex flex-col justify-start items-start">
          <h3 className="font-medium text-gray-900">Wallet Connected</h3>
          <p className="text-sm text-gray-600">
            {account?.address.slice(0, 6)}...{account?.address.slice(-4)}
          </p>
        </div>
      </div>
    </div>
  );
}
