import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FolderIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

async function getUsers() {
  const res = await fetch("https://api.github.com/users");

  if (!res.ok) {
    toast({
      title: "Failed to fetch",
      description: "An error occurred trying to get the data from the API",
    });
  }

  return res.json();
}

export default async function GithubUsers() {
  const users = await getUsers();

  return (
    <Container>
      <div className="mb-8 text-center">
        <h1>GitHub Users App</h1>
        <p className="text-sm text-muted-foreground">
          This app uses the free version of the{" "}
          <a
            href="https://api.github.com/users"
            target="_blank"
            rel="noreferrer"
            className="text-white underline"
          >
            GitHub Users API
          </a>
        </p>
      </div>
      {users ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <Card key={user.login} className="group text-center">
              <CardHeader>
                <Image
                  src={user.avatar_url}
                  alt={user.login}
                  width={80}
                  height={80}
                  className="mx-auto block rounded-full border-2 border-neutral-900 transition group-hover:border-neutral-800"
                />
              </CardHeader>

              <CardContent className="space-y-4">
                <CardTitle className="capitalize">{user.login}</CardTitle>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Button asChild>
                    <a
                      href={user.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <GitHubLogoIcon size={16} /> GitHub Profile
                    </a>
                  </Button>

                  <Button asChild>
                    <a
                      href={`${user.html_url}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <FolderIcon size={16} /> Repositories
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="my-8 text-center text-sm text-muted-foreground">
          Loading user profiles...
        </p>
      )}
    </Container>
  );
}
