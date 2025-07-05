import { IMetaMaskSignUp } from "@/interfaces/IMetamaskSignUp";
import { renderIcon } from "@/utils/iconMap";
import BackButton from "./BackButton";

export default function MetaMaskSignUp({
  selectedRole,
  error,
  isMetaMaskInstalled,
  isConnecting,
  connectMetaMask,
  setCurrentStep,
}: IMetaMaskSignUp) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Connect Your Wallet
        </h2>
        <p className="text-gray-600">Sign up securely with MetaMask</p>
      </div>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div
              className={`bg-gradient-to-br from-${
                selectedRole === "patient" ? "pink" : "rose"
              }-100 to-${
                selectedRole === "patient" ? "pink" : "rose"
              }-200 p-2 rounded-lg`}
            >
              {selectedRole === "patient"
                ? renderIcon("User", {
                    className: "h-5 w-5 text-pink-600",
                  })
                : renderIcon("Stethoscope", {
                    className: "h-5 w-5 text-rose-600",
                  })}
            </div>
            <div>
              <p className="font-medium text-gray-900">
                Signing up as{" "}
                {selectedRole === "patient" ? "Patient" : "Doctor"}
              </p>
              <p className="text-sm text-gray-600">
                {selectedRole === "patient"
                  ? "Manage your health records"
                  : "Provide health care"}
              </p>
            </div>
          </div>
          <BackButton setCurrentStep={setCurrentStep} text="Change" />
        </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
        <div className="flex items-center space-x-3 mb-4">
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-lg">
            {renderIcon("Wallet", {
              className: "h-6 w-6 text-orange-600",
            })}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              MetaMask Registration
            </h3>
            <p className="text-sm text-gray-600">
              Secure, decentralized account creation
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
            {renderIcon("AlertCircle", {
              className: "h-5 w-5 text-red-500 flex-shrink-0 mt-0.5",
            })}
            <div>
              <p className="text-sm text-red-800">{error}</p>
              {!isMetaMaskInstalled && (
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-red-600 hover:text-red-700 underline mt-1 inline-block"
                >
                  Install MetaMask
                </a>
              )}
            </div>
          </div>
        )}

        <button
          onClick={connectMetaMask}
          disabled={isConnecting || !isMetaMaskInstalled}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isConnecting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Connecting...
            </>
          ) : (
            <>
              {renderIcon("Wallet", {
                className: "mr-2 h-5 w-5",
              })}
              {isMetaMaskInstalled
                ? "Connect with MetaMask"
                : "Install MetaMask First"}
            </>
          )}
        </button>

        {!isMetaMaskInstalled && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-start space-x-3">
              {renderIcon("AlertCircle", {
                className: "h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5",
              })}
              <div>
                <p className="text-sm font-medium text-yellow-800">
                  MetaMask Required
                </p>
                <p className="text-sm text-yellow-700 mt-1">
                  You need to install MetaMask browser extension to create your
                  account.
                </p>
                <a
                  href="https://metamask.io/download/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-sm mt-2"
                >
                  Download MetaMask
                  {renderIcon("ArrowRight", {
                    className: "ml-1 h-4 w-4",
                  })}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
