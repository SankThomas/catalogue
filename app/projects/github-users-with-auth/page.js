"use client";

import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { FolderIcon, GlobeIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function GithubUsersWithAuth() {
  const [repos, setRepos] = useState([]);
  const [username, setUsername] = useState("sankthomas");
  const { toast } = useToast();

  async function getRepos() {
    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=50&sort=updated`,
      );
      const data = await res.json();
      setRepos(data);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    getRepos();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    getRepos();
  }

  return (
    <Container>
      <div className="mx-auto mb-8 max-w-lg text-center">
        <h1>GitHub Users App</h1>
        <p className="text-sm text-muted-foreground">
          This app uses the{" "}
          <a
            href="https://api.github.com/users"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            GitHub Users API
          </a>{" "}
          to get profile and repository data. Use sparingly as this API is not
          free.
        </p>
      </div>

      <div className="mx-auto my-8 max-w-lg">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="search-username" className="label cursor-pointer">
              Search for a GitHub Username
            </label>
            <input
              type="text"
              name="search-username"
              id="search-username"
              placeholder="Search for a GitHub Username"
              required
              className="input text-sm"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mt-4 flex items-end justify-end">
            <Button variant="secondary" onClick={handleSubmit}>
              Search
            </Button>
          </div>
        </form>
      </div>

      {repos.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2">
          {repos.map((repo) => (
            <Card key={repo.id} className="group">
              <CardHeader>
                <div className="flex flex-col items-start justify-between gap-8 sm:flex-row">
                  <div className="space-y-4">
                    <Image
                      src={repo.owner.avatar_url}
                      alt={repo.owner.login}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-neutral-900 transition group-hover:border-neutral-800"
                    />
                    <div className="space-y-2">
                      <CardTitle>{repo.name}</CardTitle>
                      <small>{repo.full_name}</small>

                      <div className="flex flex-wrap items-center justify-start gap-2">
                        <CardDescription className="text-xs">
                          Created:{" "}
                          {format(new Date(repo.created_at), "do MMM yyyy")}
                        </CardDescription>{" "}
                        &middot;
                        <CardDescription className="text-xs">
                          Updated:{" "}
                          {format(new Date(repo.updated_at), "do MMM yyyy")}
                        </CardDescription>
                      </div>

                      {repo.topics ? (
                        <ul className="flex flex-wrap items-center justify-start gap-2">
                          {repo.topics.map((topic, index) => (
                            <li key={index}>
                              <Button size="sm">{topic}</Button>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <ul className="flex flex-wrap items-center justify-end gap-2">
                      <li>
                        <Button>
                          <StarIcon size={16} /> &nbsp; {repo.stargazers_count}
                        </Button>
                      </li>
                      {repo.homepage ? (
                        <li>
                          <Button asChild>
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <GlobeIcon size={16} /> &nbsp; Demo
                            </a>
                          </Button>
                        </li>
                      ) : null}
                    </ul>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {repo.description ? (
                  <CardDescription>{repo.description}</CardDescription>
                ) : null}

                <div className="flex flex-wrap items-center justify-start gap-4">
                  <Button asChild>
                    <a
                      href={`${repo.html_url}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FolderIcon size={16} /> View repository
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="my-8 text-center text-sm text-muted-foreground">
          No GitHub profile matches {username}
        </p>
      )}
    </Container>
  );
}
