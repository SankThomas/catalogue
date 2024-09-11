import React from "react";
import Container from "@/components/container";
import { createClient, groq } from "next-sanity";
import { client } from "@/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default async function Posts({ params }) {
  const slug = params.posts;

  async function getPost() {
    return createClient(client).fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        publishedAt,
        title,
        "slug": slug.current,
        body,
        "name": author->name,
        "author_image": author->image,
        "author_bio": author->bio,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        },
      }`,
      { slug },
    );
  }

  getPost();

  const post = await getPost(slug);

  return (
    <>
      <Container>
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="text-center">
            <h1>{post.title}</h1>
            <CardDescription>
              By {post.name},{" "}
              {format(new Date(post.publishedAt), "do MMMM yyyy")}
            </CardDescription>
          </div>

          {post.mainImage && (
            <Image
              src={post.mainImage.asset.url}
              width={800}
              height={600}
              alt={post.mainImage.alt}
              className="mx-auto block aspect-video rounded-lg"
            />
          )}

          <div className="portable-text">
            <PortableText value={post.body} />
          </div>

          <Button asChild>
            <Link href="/projects/sanity-blog/">&larr; More blog posts</Link>
          </Button>

          <div className="text-center">
            <Card className="bg-neutral-950">
              {post.author_image && (
                <CardHeader>
                  <h3 className="mb-2 text-xl">About the author</h3>
                  <Image
                    src={urlFor(post.author_image).url()}
                    width={80}
                    height={80}
                    alt={post.name}
                    className="mx-auto block rounded-full"
                  />
                </CardHeader>
              )}
              <CardContent className="space-y-4">
                <CardTitle>{post.name}</CardTitle>
                {post.author_bio && (
                  <div>
                    <CardDescription>
                      {post.author_bio[0].children[0].text}
                    </CardDescription>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </>
  );
}
