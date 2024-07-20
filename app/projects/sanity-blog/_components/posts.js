"use client";

import { createClient, groq } from "next-sanity";
import { client } from "@/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Search from "@/components/search";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [text, setText] = useState("");

  // posts.map((post) => console.log(post.categories));

  function search(title) {
    setText(title);

    if (text) {
      const filteredPosts = posts.filter((post) =>
        Object.values(post)
          .join("")
          .toLowerCase()
          .includes(title.toLowerCase()),
      );
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(posts);
    }
  }

  async function getPosts() {
    const allPosts = await createClient(client).fetch(
      groq`*[_type == "post"] {
        title,
        slug,
        body,
        publishedAt,
        categories[] -> {
          title,
        },
        mainImage {
          asset -> {
            url
          },
          alt,
        },
        "name": author -> name,
      } | order(publishedAt desc)`,
    );
    setPosts(allPosts);
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <div className="mb-12 space-y-6 text-center">
        <CardDescription>
          This is my actual blog on{" "}
          <a
            href="https://tsbsankara.netlify.app"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            my website
          </a>
        </CardDescription>

        <div className="mx-auto max-w-2xl">
          <Search search={search} />
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
        {text.length > 1
          ? filteredPosts.map((post) => (
              <Link
                key={post.slug.current}
                href={`/projects/sanity-blog/posts/${post.slug.current}`}
              >
                <Card>
                  <CardHeader>
                    {post.mainImage ? (
                      <Image
                        src={post.mainImage.asset.url}
                        width={800}
                        height={600}
                        alt={post.mainImage.alt}
                        className="aspect-auto h-auto w-full object-contain object-center lg:h-96"
                      />
                    ) : (
                      <CardTitle>No cover image</CardTitle>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      By {post.name} &middot;{" "}
                      {format(new Date(post.publishedAt), "do MMMM yyyy")}
                    </CardDescription>
                    <CardDescription>{`${post.body[0].children[0].text.substring(0, 200)}...`}</CardDescription>

                    {/* {post.categories !== null && (
                <ul className="flex items-center justify-start gap-2">
                  {post.categories.map((category, index) => (
                    <li
                      key={index}
                      className="inline rounded-full bg-neutral-900 px-2 py-[2px] text-xs text-neutral-400"
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              )} */}
                  </CardContent>
                </Card>
              </Link>
            ))
          : posts.map((post) => (
              <Link
                key={post.slug.current}
                href={`/projects/sanity-blog/posts/${post.slug.current}`}
              >
                <Card>
                  <CardHeader>
                    {post.mainImage ? (
                      <Image
                        src={post.mainImage.asset.url}
                        width={800}
                        height={600}
                        alt={post.mainImage.alt}
                        className="aspect-auto h-auto w-full object-contain object-center lg:h-96"
                      />
                    ) : (
                      <CardTitle>No cover image</CardTitle>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardTitle>{post.title}</CardTitle>
                    <CardDescription>
                      By {post.name} &middot;{" "}
                      {format(new Date(post.publishedAt), "do MMMM yyyy")}
                    </CardDescription>
                    <CardDescription>{`${post.body[0].children[0].text.substring(0, 200)}...`}</CardDescription>

                    {/* {post.categories !== null && (
                <ul className="flex items-center justify-start gap-2">
                  {post.categories.map((category, index) => (
                    <li
                      key={index}
                      className="inline rounded-full bg-neutral-900 px-2 py-[2px] text-xs text-neutral-400"
                    >
                      {category.title}
                    </li>
                  ))}
                </ul>
              )} */}
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </>
  );
}
