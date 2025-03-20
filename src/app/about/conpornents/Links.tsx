"use client";

import Section               from "@/app/about/conpornents/Section";
import {FaGithub, FaYoutube} from "react-icons/fa";
import {FaX}                 from "react-icons/fa6";

export default function Links() {
  return <Section title="リンク集">
    <div className="flex justify-center gap-6 text-3xl text-gray-600 dark:text-gray-200">
      <a
        href="https://github.com/katsu1101"
        className="hover:text-gray-900 dark:hover:text-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub/>
      </a>
      <a
        href="https://x.com/katsu1101"
        className="hover:text-blue-500 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
      >
        <FaX/>
      </a>
      <a
        href="https://www.youtube.com/@katsu1101"
        className="hover:text-red-500 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="YouTube"
      >
        <FaYoutube/>
      </a>
    </div>
  </Section>
}