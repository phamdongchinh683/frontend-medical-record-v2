import { renderIcon } from "@/utils/iconMap";
import InfoInput from "../InfoInput";
import SelectOption from "../SelectOption";

export default function PersonalInfo() {
  const styleButton =
    "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-300 focus:border-pink-300 outline-none";

  const options = ["Male", "Female"];

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          {renderIcon("User", { className: "h-5 w-5 mr-2 text-pink-600" })}
          Personal Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoInput
            type="text"
            placeholder="First Name"
            name="firstName"
            className={styleButton}
          />
          <InfoInput
            type="text"
            placeholder="Last Name"
            name="lastName"
            className={styleButton}
          />
          <InfoInput
            type="text"
            name="citizenIdentification"
            placeholder="Citizen Identification"
            className={styleButton}
          />
          <InfoInput
            type="email"
            placeholder="Email Address"
            name="email"
            className={styleButton}
          />

          <InfoInput
            type="tel"
            placeholder="Phone Number"
            name="phone"
            className={styleButton}
          />
          <InfoInput type="date" name="dateOfBirth" className={styleButton} />
          <SelectOption options={options} name="gender" />
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          {renderIcon("MapPin", { className: "h-5 w-5 mr-2 text-pink-600" })}
          Address Information
        </h3>
        <div className="grid grid-cols-1 gap-4">
          <InfoInput
            type="text"
            name="address"
            placeholder="Enter your street address"
            className={styleButton}
          />
          <div />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <InfoInput
              type="text"
              name="city"
              placeholder="City"
              className={styleButton}
            />
            <InfoInput
              type="text"
              name="country"
              placeholder="Country"
              className={styleButton}
            />
            <InfoInput
              type="text"
              name="zipCode"
              placeholder="ZIP Code"
              className={styleButton}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
