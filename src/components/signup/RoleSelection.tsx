import { IRoleSelection } from "@/interfaces/IRoleSelection";
import { renderIcon } from "@/utils/iconMap";

export default function RoleSelection({
  roles,
  setSelectedRole,
  setCurrentStep,
}: IRoleSelection) {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Choose Your Account Type
        </h2>
        <p className="text-gray-600">
          Select the option that best describes you
        </p>
      </div>
      <div className="grid gap-6">
        {roles.map((role) => (
          <button
            key={role.id}
            onClick={() => {
              setSelectedRole(role.id);
              setCurrentStep(2);
            }}
            className="w-full p-6 border-2 border-pink-100 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all duration-300 text-left group"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`bg-gradient-to-br from-${role.color}-100 to-${role.color}-200 p-4 rounded-lg group-hover:scale-110 transition-transform`}
              >
                {renderIcon(role.icon, {
                  className: `h-8 w-8 text-${role.color}-600`,
                })}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {role.title}
                  </h3>
                  {renderIcon(role.icon, {
                    className:
                      "h-5 w-5 text-gray-400 group-hover:text-pink-600 transition-colors",
                  })}
                </div>
                <p className="text-gray-600 mb-4">{role.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {role.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      {renderIcon("CheckCircle", {
                        className: "h-4 w-4 text-green-500 flex-shrink-0",
                      })}
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
