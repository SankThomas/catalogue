import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

async function getLeagues() {
  const res = await fetch(
    `https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`,
  );

  if (!res.ok) {
    throw new Error("Custom error: failed to fetch leagues");
  }

  return res.json();
}

export default async function SportsApp() {
  const leagues = await getLeagues();

  return (
    <Container>
      <div className="space-y-8">
        <article className="mx-auto max-w-2xl text-center">
          <h1 className="mb-8 text-4xl lg:text-5xl">Sports App</h1>
          <CardDescription>
            This app uses{" "}
            <a
              href="https://thesportsdb.com/free_sports_api"
              target="_blank"
              rel="noreferrer"
              className="text-white underline"
            >
              The Sports DB API
            </a>{" "}
            <br /> The API returns 50 leagues on the free tier.
          </CardDescription>
        </article>

        <article className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {leagues.leagues.map((league) => (
            <Link
              href={`/projects/sports-app/teams/${league.strLeague}`}
              key={league.idLeague}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">{league.strLeague}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="inline-block rounded-full bg-neutral-900 px-3 py-1">
                    {league.strSport}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </article>
      </div>
    </Container>
  );
}
