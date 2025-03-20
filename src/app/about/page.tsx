"use client";

import Links   from "./conpornents/Links";
import Section from './conpornents/Section';

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-200">
          Hello World Next.js App RouterサンプルのAboutページです。
        </p>
      </section>

      <Section title="このプロジェクトについて">
        Next.js 15.xのApp Router機能を使い、実際のベストプラクティスに従って構築されたシンプルなHello Worldプロジェクトです。<br/>
        App Router、TypeScript、Tailwind CSSなど、現代的なスタックで構成されています。
      </Section>

      <Section title="技術スタック">
        <ul className="list-disc list-inside">
          <li>Next.js 15.x (App Router)</li>
          <li>React 19+</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>React Icons</li>
        </ul>
      </Section>

      <Links/>
    </div>
  );
}
