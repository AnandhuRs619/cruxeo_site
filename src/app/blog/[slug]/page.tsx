import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { blogPostsData } from "@/data/siteData";
import { CtaBanner } from "@/components/ui/CtaBanner";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Cruxeo Insights`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishDate,
      authors: [post.author.name],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPostsData.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <article className="pt-32 pb-20 bg-background text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-cyan transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to all articles</span>
        </Link>

        {/* Article Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-6">
          <span className="px-3 py-1 rounded-full bg-brand-blue/20 text-cyan-400 border border-brand-blue/30 font-medium">
            {post.category}
          </span>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{post.publishDate}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Author Card */}
        <div className="flex items-center justify-between py-6 border-y border-white/10 mb-12">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-800 border border-white/10">
              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">{post.author.name}</h4>
              <p className="text-xs text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </div>

        {/* Excerpt Lead */}
        <div className="p-6 rounded-2xl bg-white/[0.03] border-l-4 border-brand-cyan mb-10 text-slate-200 text-lg leading-relaxed italic">
          {post.excerpt}
        </div>

        {/* Article Body Content */}
        <div className="prose prose-invert max-w-none space-y-6 text-slate-300 text-base leading-relaxed">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("### ")) {
              return (
                <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">
                  {paragraph.replace("### ", "")}
                </h2>
              );
            }
            if (paragraph.startsWith("#### ")) {
              return (
                <h3 key={index} className="text-xl font-semibold text-cyan-400 mt-6 mb-3">
                  {paragraph.replace("#### ", "")}
                </h3>
              );
            }
            if (paragraph.startsWith("- ")) {
              const listItems = paragraph.split("\n").filter((l) => l.trim().length > 0);
              return (
                <ul key={index} className="list-disc pl-6 space-y-2 text-slate-300">
                  {listItems.map((li, liIdx) => (
                    <li key={liIdx}>{li.replace("- ", "")}</li>
                  ))}
                </ul>
              );
            }
            return <p key={index}>{paragraph}</p>;
          })}
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h3 className="text-2xl font-bold text-white mb-6">Related Readings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-brand-blue/50 transition-all block group"
              >
                <span className="text-xs text-brand-cyan font-medium block mb-2">
                  {related.category}
                </span>
                <h4 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors mb-2 line-clamp-2">
                  {related.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2">{related.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <CtaBanner />
    </article>
  );
}

