import SignUpClient from "@/components/signup/SignUpClient";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up",
  description: "Sign Up",
  keywords: "sign up, healthcare, medical records, blockchain",
};

export default function SignUpPage() {
  return <SignUpClient />;
}
