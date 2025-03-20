import BlogPostClient from "@/app/blog/[slug]/BlogPostClient";
import samplePosts    from '@/data/samplePosts.json';
import type {Post}    from '@/types/post';
import {notFound}     from "next/navigation";
import {use}          from "react";

interface BlogPostParams {
  params: Promise<{ slug: string }>; // paramsはPromiseとして渡される
}

const posts: Post[] = samplePosts;

// 動的パスに対しては、必ずgenerateStaticParams()が必要
// データに合わせてページを事前に生成してくれる
export async function generateStaticParams() {
  return posts.map(post => ({slug: post.slug}));
}

export default function BlogPostPage({params}: BlogPostParams) {
  // paramsをuseで明示的にunwrapする（Next.js 15以降の正しい方法）
  const {slug} = use(params);

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    // Next.js標準の404ページを表示する
    notFound();
  }

  return <BlogPostClient post={post}/>;
}
