import { Mail, MapPin, Phone } from "lucide-react";

export default function QuickContactSection() {
  return (
    <div className="space-y-4">
      <h4 className="font-semibold text-white mb-4 text-sm lg:text-base">
        Quick Contact
      </h4>
      <ul className="space-y-3 text-gray-400">
        <li className="flex items-center text-sm lg:text-base">
          <Phone className="h-4 w-4 mr-3 flex-shrink-0" />
          <span>+0 (84) 772-573-366</span>
        </li>
        <li className="flex items-center text-sm lg:text-base">
          <Mail className="h-4 w-4 mr-3 flex-shrink-0" />
          <span>medrecords@gmail.com</span>
        </li>
        <li className="flex items-start text-sm lg:text-base">
          <MapPin className="h-5 w-4 mr-3 flex-shrink-0" />
          <span>
            201B Nguyen Chi Thanh Ward 12 - District 5 - Ho Chi Minh City -
            Vietnam
          </span>
        </li>
      </ul>
    </div>
  );
}
