"use client";

import samplePosts from '@/data/samplePosts.json';
import type {Post} from '@/types/post';
import Link        from 'next/link';

export default function BlogListPage() {

  const posts: Post[] = samplePosts;

  return (
    <div className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        ブログ記事一覧
      </h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="block p-4 bg-white dark:bg-gray-800 rounded shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-100">
                {post.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
