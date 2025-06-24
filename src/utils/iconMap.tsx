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

// Centralized icon mapping for the entire application
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

// Type for icon names
export type IconName = keyof typeof iconMap;

// Utility function to get icon component
export const getIcon = (iconName: string) => {
  return iconMap[iconName as IconName];
};

// Utility function to render icon with props
export const renderIcon = (
  iconName: string,
  props?: React.ComponentProps<"svg">
) => {
  const IconComponent = getIcon(iconName);
  return IconComponent ? <IconComponent {...props} /> : null;
};
