import {
  ContactMethods,
  HeroSection,
  OfficeLocations,
  SupportResources,
} from "@/components/contact";
import contactData from "@/mocks/contact.json";
import { getIcon } from "@/utils/iconMap";

const contactMethods = contactData.contactMethods.map((method) => ({
  ...method,
  icon: getIcon(method.icon),
}));

const offices = contactData.offices;

const supportResources = contactData.supportResources.map((resource) => ({
  ...resource,
  icon: getIcon(resource.icon),
}));

export default function ContactPage() {
  return (
    <>
      <HeroSection />
      <ContactMethods contactMethods={contactMethods} />
      <OfficeLocations offices={offices} />
      <SupportResources supportResources={supportResources} />
    </>
  );
}
