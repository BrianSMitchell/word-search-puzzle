import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { siteUrl } from "@/lib/site";
import { ArticleSchema } from "@/components/Schema";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Word Search Puzzle Blog`,
    description: post.description,
    alternates: {
      canonical: `${siteUrl}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="page">
      {/* Schema Markup */}
      <ArticleSchema
        title={post.title}
        description={post.description}
        slug={slug}
        datePublished={post.date}
        author={post.author}
        tags={post.tags}
      />

      <div className="page-grid">
        <article className="page-main">
          <header className="mb-8">
            <Link href="/blog" className="text-sm text-offset hover:underline mb-4 block">
              ← Back to Blog
            </Link>
            <div className="flex gap-2 mb-4">
              {post.tags.map((tag) => (
                <span key={tag} className="badge badge-sm">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4 has-text-gradient">{post.title}</h1>
            <div className="text-offset text-sm border-b border-border pb-6 flex items-center justify-between">
              <span>
                By {post.author} • {new Date(post.date).toLocaleDateString()}
              </span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          <div className="prose max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          <hr className="my-8 border-border" />
          
          <div className="bg-surface-elevated p-6 rounded-lg">
             <h3 className="text-lg font-bold mb-2">Enjoyed this article?</h3>
             <p className="mb-4">Take a break and challenge your brain with a new puzzle.</p>
             <Link className="button button-solid" href="/daily-word-search">
                Play Daily Puzzle
             </Link>
          </div>
        </article>

        <aside className="page-aside">
          <section className="card sticky top-4">
            <h3>More to Explore</h3>
            <ul className="space-y-2 mt-4">
              <li>
                <Link href="/word-search-generator" className="hover:text-primary">
                  Create your own puzzle
                </Link>
              </li>
              <li>
                <Link href="/themed-word-search-puzzles" className="hover:text-primary">
                  Browse themed collections
                </Link>
              </li>
              <li>
                <Link href="/printable-word-search" className="hover:text-primary">
                  Printable worksheets
                </Link>
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </div>
  );
}
