"use client";

import UserProfile from "@/components/dashboard/UserProfile";

export default function ProfilePage() {
  const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 555-123-4567",
    gender: "Female",
    citizenIdentification: "123456789",
    dateOfBirth: "1990-01-01",
    address: "123 Main St",
    country: "USA",
    city: "New York",
    zipCode: "10001",
    createdAt: "2023-01-01T12:00:00Z",
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const updatedUser = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      dateOfBirth: formData.get("dateOfBirth") as string,
      gender: formData.get("gender") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: formData.get("address") as string,
    };

    console.log(updatedUser);
  };
  return <UserProfile role="Profile" user={user} handleSubmit={handleSubmit} />;
}
