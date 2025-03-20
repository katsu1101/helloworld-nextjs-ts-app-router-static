"use client";

import React from "react";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function Section({title, children}: SectionProps) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-100 mb-3">
        {title}
      </h2>
      <div className="text-gray-600 dark:text-gray-200 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
