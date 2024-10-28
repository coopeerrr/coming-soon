import { LucideIcon } from 'lucide-react';

interface FeatureBadgeProps {
  icon: LucideIcon;
  text: string;
  iconColor?: string;
}

export function FeatureBadge({ icon: Icon, text, iconColor }: FeatureBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <Icon className={`h-5 w-5 ${iconColor}`} />
      <span>{text}</span>
    </div>
  );
}