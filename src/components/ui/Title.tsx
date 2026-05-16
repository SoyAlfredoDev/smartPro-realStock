import { ReactNode } from "react";

interface TitleProps {
  text: string;
  highlight?: string;
  className?: string;
}

export function Title({ text, highlight, className = "" }: TitleProps) {
  if (!highlight) {
    return (
      <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-heading ${className}`}>
        {text}
      </h1>
    );
  }

  // Split the text to inject the highlight with correct styles
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-heading ${className}`}>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="italic text-terracota">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </h1>
  );
}
