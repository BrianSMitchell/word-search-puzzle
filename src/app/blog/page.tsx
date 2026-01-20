import { getAllPosts } from "@/lib/blog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Word Search Puzzle Insights",
  description:
    "Articles, tips, and insights about word search puzzles, education, and brain health.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="page">
      <section className="hero">
        <div className="reveal">
          <span className="badge">Blog</span>
          <h1>Word Search Insights</h1>
          <p>
            Tips, educational resources, and stories about the world of word puzzles.
          </p>
        </div>
      </section>

      <div className="page-grid">
        <div className="page-main">
          {posts.length === 0 ? (
            <section className="card prose">
              <p>No posts found. Check back later!</p>
            </section>
          ) : (
            <div className="grid gap-6">
              {posts.map((post) => (
                <article key={post.slug} className="card hover-effect">
                  <span className="text-sm text-offset mb-2 block">
                    {new Date(post.date).toLocaleDateString(undefined, {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })} • {post.readingTime}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="no-underline group"
                  >
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-offset mb-4 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {post.tags.map((tag) => (
                      <span key={tag} className="badge badge-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
        
        <aside className="page-aside">
          <section className="card">
            <h3>Popular Topics</h3>
            <div className="flex gap-2 flex-wrap mt-4">
               <span className="badge">Education</span>
               <span className="badge">Brain Health</span>
               <span className="badge">Tips</span>
               <span className="badge">Puzzles</span>
            </div>
          </section>
          
          <section className="card">
             <h3>Play Puzzles</h3>
             <div className="hero-actions mt-4">
              <Link className="button button-solid w-full text-center" href="/daily-word-search">
                Daily Challenge
              </Link>
             </div>
          </section>
        </aside>
      </div>
    </div>
  );
}
