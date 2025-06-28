import { LucideIcon } from "lucide-react";

export interface IContactDetail {
  label: string;
  value: string;
  available: string;
}

export interface IContactMethod {
  icon: LucideIcon;
  title: string;
  description: string;
  details: IContactDetail[];
  color: string;
}
