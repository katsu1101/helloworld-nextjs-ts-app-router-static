'use client';

import type { Post } from '@/types/post';

export default function BlogPostClient({ post }: { post: Post }) {
  return (
    <article className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        {post.title}
      </h1>
      <div className="text-gray-700 dark:text-gray-200 leading-relaxed">
        {post.content}
      </div>
    </article>
  );
}
