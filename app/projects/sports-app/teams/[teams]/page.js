import Container from "@/components/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Teams({ params }) {
  async function getTeams() {
    const url = `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${params.teams}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Custom error: failed to fetch teams");
    }

    return res.json();
  }

  const teams = await getTeams();

  return (
    <Container>
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h1 className="text-4xl lg:text-5xl">
          {params.teams.split("%20").join(" ")}
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {!teams.teams ? (
          <CardDescription className="text-center md:col-span-2 lg:col-span-3 xl:col-span-4">
            No teams in this league
          </CardDescription>
        ) : (
          teams.teams.map((team) => (
            <Link
              href={`/projects/sports-app/teams/${params.teams}/team/${team.strTeam}`}
              key={team.idTeam}
            >
              <Card>
                <CardHeader>
                  {team.strBadge ? (
                    <Image
                      src={team.strBadge}
                      width={400}
                      height={400}
                      alt={team.strTeam}
                      className="mx-auto block"
                    />
                  ) : (
                    <CardDescription>No team badge</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-center">{team.strTeam}</CardTitle>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    </Container>
  );
}
