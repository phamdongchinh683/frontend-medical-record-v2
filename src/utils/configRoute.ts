import NavLink from "@/components/header/NavLink";
import { IRoute } from "@/interfaces/IRoute";
import navigation from "@/mocks/navigation.json";
import { Role } from "./constant";

export const navigationRole = (route: IRoute[]) => {
  return navigation.public.concat(route).map((item) => NavLink(item));
};

export const accessDashboard = (role: number) =>
  role === Role.PATIENT
    ? [
        {
          name: "My Dashboard",
          href: "/dashboard/patient",
        },
      ]
    : [
        {
          name: "My Dashboard",
          href: "/dashboard/doctor",
        },
      ];
