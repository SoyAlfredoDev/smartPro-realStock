import { ReactNode } from "react";

interface InfoBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function InfoBox({ icon, title, description }: InfoBoxProps) {
  return (
    <div className="bg-accent-muted rounded-3xl p-8 flex flex-col justify-center h-full border border-border-default shadow-sm transition-shadow hover:shadow-md">
      <div className="text-terracota mb-5 bg-surface w-14 h-14 rounded-full flex items-center justify-center shadow-sm border border-border-default">
        {icon}
      </div>
      <h3 className="font-semibold text-heading text-xl mb-3">{title}</h3>
      <p className="text-body leading-relaxed font-light">{description}</p>
    </div>
  );
}
