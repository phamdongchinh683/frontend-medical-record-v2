import { IUserInfo } from "@/interfaces/IUserInfo";
import { calculateAge } from "@/utils/calculateAge";
import { renderIcon } from "@/utils/iconMap";
import Button from "../Button";
import InfoInput from "../InfoInput";
import Label from "../Label.";
import SelectOption from "../SelectOption";

export default function UserProfile({
  role,
  user,
  handleSubmit,
}: {
  role: string;
  user: IUserInfo;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  const style =
    "w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-pink-300 focus:border-pink-300 transition-colors duration-200 ";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{role}</h2>
        <p className="text-gray-600">Manage your personal information</p>
      </div>
      <div className="bg-white rounded-lg border border-pink-100 p-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
            {renderIcon("User", { className: "h-10 w-10 text-white" })}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-gray-600">
              Patient ID: {user.citizenIdentification}
            </p>
            <p className="text-sm text-gray-500">
              Member since: {new Date(user.createdAt).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              Age: {calculateAge(user.dateOfBirth)}
            </p>
          </div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label name="First Name" />
              <InfoInput
                type="text"
                name="firstName"
                defaultValue={user.firstName}
                className={style}
              />
            </div>
            <div>
              <Label name="Last Name" />
              <InfoInput
                type="text"
                name="lastName"
                defaultValue={user.lastName}
                className={style}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label name="Date of Birth" />
              <InfoInput
                type="date"
                name="dateOfBirth"
                defaultValue={user.dateOfBirth}
                className={style}
              />
            </div>
            <div>
              <Label name="Gender" />
              <SelectOption
                options={["Male", "Female", "Other"]}
                name="gender"
                value={user.gender}
              />
            </div>
          </div>
          <div>
            <Label name="Email" />
            <InfoInput
              type="email"
              name="email"
              defaultValue={user.email}
              className={style}
            />
          </div>
          <div>
            <Label name="Phone" />
            <InfoInput
              type="tel"
              name="phone"
              defaultValue={user.phone}
              className={style}
            />
          </div>
          <div>
            <Label name="Address" />
            <InfoInput
              type="text"
              name="address"
              defaultValue={
                user.address +
                ", " +
                user.city +
                ", " +
                user.country +
                ", " +
                user.zipCode
              }
              className={style}
            />
          </div>
          <div className="flex justify-end">
            <Button
              type="submit"
              value="Save Changes"
              className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-rose-600"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
