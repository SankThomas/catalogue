"use client";

import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  GlobeIcon,
  Heart,
  MessageCircle,
} from "lucide-react";
import { GitHubLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

export default function DevTo() {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState("javascript");
  const [page, setPage] = useState(1);

  const { toast } = useToast();

  async function getArticles() {
    const res = await fetch(
      `https://dev.to/api/articles?per_page=10&page=${page}&tag=${tags}`,
    );
    const data = await res.json();
    setArticles(data);
  }

  useEffect(() => {
    getArticles();
    window.scrollTo(0, 0);
  }, [page, tags]);

  function previousPage() {
    if (page === 1) {
      setPage(1);
      toast({
        title: "You are on the first page",
        descritpion: "You cannot go further back than this",
      });
    } else {
      setPage(page - 1);
    }
  }

  function nextPage() {
    if (page > 1000) {
      setPage(1000);
      toast({
        title: "You are on the last page",
        description: "You cannot go further ahead than page 1000",
      });
    } else {
      setPage(page + 1);
    }
  }

  return (
    <Container>
      <section>
        <div className="mb-12 text-center">
          <h1 className="mb-8 text-4xl lg:text-5xl">DevTo</h1>
          <p>
            This app uses the{" "}
            <a
              href="https://dev.to"
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >
              Dev.to
            </a>{" "}
            API. <br />
            1. Clicking on the titles will take you to the actual article on
            Dev.to <br />
            2. Click the tage to filter articles by tags. <br />
            3. Next and back buttons on the bottom of the page
          </p>
        </div>

        <CardDescription className="mb-4">
          You are on page {page}
        </CardDescription>

        <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="space-y-4">
              <CardHeader>
                {article.cover_image && (
                  <Image
                    src={article.cover_image}
                    width={1000}
                    height={500}
                    alt={article.slug}
                    className="mx-auto block rounded-lg"
                  />
                )}
              </CardHeader>

              <CardContent className="space-y-4">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                  key={article.id}
                >
                  <CardTitle className="transtion leading-7 hover:text-blue-600">
                    {article.title}
                  </CardTitle>
                </a>
                <CardDescription>{article.description}</CardDescription>
                <CardDescription>
                  By {article.user.name}{" "}
                  <span className="text-xl">&middot;</span>
                  {format(new Date(article.published_at), "do MMMM yyyy")}
                </CardDescription>

                <ul className="flex flex-wrap items-center justify-start gap-4 text-sm">
                  <li className="flex items-center justify-start gap-1">
                    {article.comments_count} <MessageCircle size={16} />
                  </li>
                  <li className="flex items-center justify-start gap-1">
                    {article.public_reactions_count} <Heart size={16} />
                  </li>
                  <li>{article.reading_time_minutes} min read</li>
                </ul>

                <ul className="flex flex-wrap items-center justify-start gap-2 text-sm">
                  {article.tag_list.map((tag, index) => (
                    <li key={index}>
                      <Button onClick={() => setTags(tag)}>{tag}</Button>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  {article.user.profile_image_90 && (
                    <Image
                      src={article.user.profile_image_90}
                      width={50}
                      height={50}
                      alt={article.user.username}
                      className="rounded-full"
                    />
                  )}
                  <div className="flex flex-col items-start justify-around">
                    <CardDescription className="font-semibold capitalize">
                      {article.user.username}
                    </CardDescription>

                    <ul className="flex items-center justify-start gap-2">
                      <li>
                        {article.user.twitter_username && (
                          <a
                            href={`https://x.com/${article.user.twitter_username}`}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                          >
                            <TwitterLogoIcon size={16} />
                          </a>
                        )}
                      </li>
                      <li>
                        {article.user.github_username && (
                          <a
                            href={`https://github.com/${article.user.github_username}`}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                          >
                            <GitHubLogoIcon size={16} />
                          </a>
                        )}
                      </li>
                      <li>
                        {article.user.website_url && (
                          <a
                            href={article.user.website_url}
                            target="_blank"
                            rel="noreferrer"
                            className="transition hover:text-white"
                          >
                            <GlobeIcon size={16} />
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <ul className="mt-8 flex items-center justify-center gap-4">
          <li>
            <Button onClick={previousPage}>
              <ArrowLeft /> &nbsp; Back
            </Button>
          </li>
          <li>
            <Button onClick={nextPage}>
              Next &nbsp;
              <ArrowRight />
            </Button>
          </li>
        </ul>
      </section>
    </Container>
  );
}
