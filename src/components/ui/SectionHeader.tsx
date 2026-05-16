import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  highlight: string;
  description: string;
}

export function SectionHeader({ label, title, highlight, description }: SectionHeaderProps) {
  // Split title to apply highlight
  const parts = title.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <div className="flex flex-col items-start w-full">
      <div className="inline-flex items-center space-x-2 bg-accent-muted text-muted px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest">
        <span>{label}</span>
      </div>
      
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] text-heading mb-6">
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="italic text-terracota">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </h2>

      <p className="text-lg text-body leading-relaxed font-light max-w-2xl">
        {description}
      </p>
    </div>
  );
}
