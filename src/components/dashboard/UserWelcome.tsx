import { IUserWelcome } from "@/interfaces/IUserWelcome";

export default function UserWelcome({
  firstName,
  lastName,
  description,
}: IUserWelcome) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Welcome Back, {firstName} {lastName}
      </h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
