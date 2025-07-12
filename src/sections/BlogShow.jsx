import React from "react";
import { Link, useParams } from "react-router-dom";
import blogs from "../constants/blogs";

const BlogShow = () => {
  const { slug } = useParams();
  const post = blogs.find((p) => p.slug === slug);

  if (!post) return <div className="p-10 text-center">Post not found</div>;

  return (
    <div>
      <br/>
      <div className="max-full-3xl mx-auto py-10 c-space relative">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-neutral-400 mb-6">{post.date}</p>

        {post.content.split(/\n\s*\n/).map((block, idx) => {
          const trimmed = block.trim();
          const regex = /\[image:(.*?):(.*?)(?::(\d+))?\]/g;

          let match;
          const images = [];
          let lastIndex = 0;
          const parts = [];

          while ((match = regex.exec(trimmed)) !== null) {
            const [fullMatch, src, caption, width] = match;

            // Grab text before the image
            const before = trimmed.slice(lastIndex, match.index).trim();
            if (before) {
              parts.push(
                <p key={`${idx}-text-${lastIndex}`} className="mb-4">
                  {before}
                </p>
              );
            }

            // Collect this image for possible horizontal grouping
            images.push({
              src,
              caption,
              width,
            });

            lastIndex = match.index + fullMatch.length;
          }

          // Any trailing text after last image
          const after = trimmed.slice(lastIndex).trim();
          if (after) {
            parts.push(
              <p key={`${idx}-after`} className="mb-4">
                {after}
              </p>
            );
          }

          // Handle rendering
          if (images.length > 1) {
            // If multiple images found in same block → render in flex row
            parts.unshift(
              <div
                key={`${idx}-flex`}
                className="flex flex-wrap justify-center gap-6 my-6"
              >
                {images.map((img, i) => (
                  <figure key={`${idx}-img-${i}`} className="text-center">
                    <img
                      src={img.src}
                      alt={img.caption}
                      style={img.width ? { width: `${img.width}px` } : {}}
                      className="rounded shadow mx-auto"
                    />
                    <figcaption className="text-sm text-neutral-500 mt-2">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            );
          } else if (images.length === 1) {
            // Single image → render vertical
            const img = images[0];
            parts.unshift(
              <figure key={`${idx}-single`} className="my-6 text-center">
                <img
                  src={img.src}
                  alt={img.caption}
                  style={img.width ? { width: `${img.width}px` } : {}}
                  className="rounded shadow mx-auto"
                />
                <figcaption className="text-sm text-neutral-500 mt-2">
                  {img.caption}
                </figcaption>
              </figure>
            );
          }

          // If this block had only text (no images), handle as normal paragraph
          if (parts.length === 0) {
            return (
              <p key={`${idx}-textonly`} className="mb-4">
                {trimmed}
              </p>
            );
          }

          return <React.Fragment key={idx}>{parts}</React.Fragment>;
        })}
      </div>
      <div className="w-full mt-0 mb-10 text-center">
        <Link
          to="/blog"
          className="inline-block bg-neutral-800 hover:bg-neutral-700 text-white rounded-full px-6 py-3 text-sm shadow"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogShow;
