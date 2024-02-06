import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2
      className="
        text-3xl 
        font-medium 
        capitalize 
        mb-8
        text-center
        dark:text-gray-200
      "
    >
      {children}
    </h2>
  );
}
