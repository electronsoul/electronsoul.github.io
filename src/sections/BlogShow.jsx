import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../constants/blogs";

const BlogShow = () => {
  const { slug } = useParams();
  const post = blogs.find((p) => p.slug === slug);

  if (!post) return <div className="p-10 text-center">Post not found</div>;

  return (
    <div className="max-w-3xl mx-auto py-10 c-space">
        <Link to="/blog" className="absolute top-4 right-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full px-4 py-2 text-sm shadow"> ← Back to Blog  </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-neutral-400 mb-6">{post.date}</p>
      {post.content.map((block, idx) => {
        if (block.type === "paragraph") return <p key={idx} className="mb-4">{block.text}</p>;
        if (block.type === "heading") return <h2 key={idx} className="text-2xl font-semibold mb-2">{block.text}</h2>;
        if (block.type === "image")
          return (
            <figure key={idx} className="my-6">
              <img src={block.src} alt={block.caption || ""} className="rounded" />
              {block.caption && <figcaption className="text-sm text-neutral-500 mt-2">{block.caption}</figcaption>}
            </figure>
          );
        return null;
      })}
    </div>
  );
};

export default BlogShow;
