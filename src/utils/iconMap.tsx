import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Database,
  FileText,
  Heart,
  Lock,
  Menu,
  Shield,
  Smartphone,
  Star,
  Users,
  X,
} from "lucide-react";

export const iconMap = {
  Shield,
  Clock,
  Users,
  FileText,
  Smartphone,
  Lock,
  Star,
  ChevronRight,
  Menu,
  X,
  Activity,
  CheckCircle,
  ArrowRight,
  Heart,
  Calendar,
  Database,
};

export type IconName = keyof typeof iconMap;

export const getIcon = (iconName: string) => {
  return iconMap[iconName as IconName];
};

export const renderIcon = (
  iconName: string,
  props?: React.ComponentProps<"svg">
) => {
  const IconComponent = getIcon(iconName);
  return IconComponent ? <IconComponent {...props} /> : null;
};
