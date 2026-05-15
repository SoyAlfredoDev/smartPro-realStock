import { ReactNode } from "react";

interface FeatureBadgeProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureBadge({ icon, title, description }: FeatureBadgeProps) {
  return (
    <div className="flex flex-col items-start p-5 bg-surface rounded-2xl border border-border-subtle shadow-sm transition-all hover:shadow-md">
      <div className="text-accent bg-accent-muted p-2.5 rounded-full mb-3">
        {icon}
      </div>
      <h3 className="font-semibold text-primary text-sm mb-1">{title}</h3>
      <p className="text-muted text-xs leading-relaxed">{description}</p>
    </div>
  );
}
