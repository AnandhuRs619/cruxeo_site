import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogPostItem } from "@/types";
import { Clock, Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPostItem;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <article className="group rounded-[28px] bg-slate-950/80 border border-white/10 hover:border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl transition-all duration-300 hover:shadow-glow">
      <div>
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
          <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30 font-medium font-mono text-[11px]">
            {post.category}
          </span>
          <div className="flex items-center gap-1.5 font-mono text-[11px]">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors leading-snug">
            {post.title}
          </h3>
        </Link>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="pt-6 border-t border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-full overflow-hidden bg-slate-800 border border-white/10">
            <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
          </div>
          <div>
            <h4 className="text-xs font-semibold text-white">{post.author.name}</h4>
            <p className="text-[11px] text-slate-400 font-mono">{post.publishDate}</p>
          </div>
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-all"
          aria-label={`Read ${post.title}`}
        >
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
};

