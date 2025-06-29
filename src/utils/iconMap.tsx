import {
  Activity,
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  ChevronRight,
  Clock,
  Database,
  FileText,
  Heart,
  HelpCircle,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Smartphone,
  Star,
  Users,
  X,
  Zap,
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
  Mail,
  Phone,
  MessageCircle,
  BookOpen,
  HelpCircle,
  Zap,
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
