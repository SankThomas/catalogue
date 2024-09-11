import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { CardDescription } from "@/components/ui/card";
import {
  GlobeIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { FacebookIcon, YoutubeIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default async function Team({ params }) {
  async function getTeam() {
    const url = `https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${params.team}`;

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Custom error: failed to fetch team details");
    }

    return res.json();
  }

  const teams = await getTeam();

  return (
    <Container>
      <article>
        {teams.teams.map((team) => (
          <article key={team.idTeam} className="space-y-12">
            <div
              style={{
                background: `url(${team.strFanart1})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: 9,
              }}
              className="h-[400px] w-auto lg:h-[500px]"
            >
              <div className="flex h-[400px] w-auto flex-col items-center justify-center space-y-4 rounded-lg bg-black/50 p-6 text-center lg:h-[500px] lg:px-12">
                <div>
                  <h1 className="mb-2 text-4xl lg:text-5xl">{team.strTeam}</h1>
                  <CardDescription className="text-neutral-200">
                    {team.strTeamAlternate}
                  </CardDescription>
                </div>

                <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {team.strWebsite && (
                    <li>
                      <Button asChild variant="secondary">
                        <a
                          href={`https://${team.strWebsite}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GlobeIcon />
                        </a>
                      </Button>
                    </li>
                  )}
                  {team.strRSS && (
                    <li>
                      <Button asChild variant="secondary">
                        <a href={team.strRSS} target="_blank" rel="noreferrer">
                          RSS
                        </a>
                      </Button>
                    </li>
                  )}
                  {team.strFacebook && (
                    <li>
                      <Button asChild variant="secondary">
                        <a
                          href={`https://${team.strFacebook}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FacebookIcon color="#171717" />
                        </a>
                      </Button>
                    </li>
                  )}
                  {team.strInstagram && (
                    <li>
                      <Button asChild variant="secondary">
                        <a
                          href={`https://${team.strInstagram}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <InstagramLogoIcon />
                        </a>
                      </Button>
                    </li>
                  )}
                  {team.strTwitter && (
                    <li>
                      <Button asChild variant="secondary">
                        <a
                          href={`https://${team.strTwitter}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <TwitterLogoIcon />
                        </a>
                      </Button>
                    </li>
                  )}
                  {team.strYoutube && (
                    <li>
                      <Button asChild variant="secondary">
                        <a
                          href={`https://${team.strYoutube}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <YoutubeIcon color="#171717" />
                        </a>
                      </Button>
                    </li>
                  )}
                </ul>

                <div>
                  {team.strCountry && (
                    <CardDescription className="text-neutral-200">
                      {team.strCountry}
                    </CardDescription>
                  )}
                </div>
              </div>
            </div>

            <CardDescription className="lg:text-base lg:leading-7">
              {team.strDescriptionEN}
            </CardDescription>

            {!team.strFanart1 ? null : (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {team.strFanart1 ? (
                  <Image
                    src={team.strFanart1}
                    width={400}
                    height={400}
                    alt={team.strTeam}
                    className="w-full rounded-lg md:w-[400px]"
                  />
                ) : null}
                {team.strFanart2 ? (
                  <Image
                    src={team.strFanart2}
                    width={400}
                    height={400}
                    alt={team.strTeam}
                    className="w-full rounded-lg md:w-[400px]"
                  />
                ) : null}
                {team.strFanart3 ? (
                  <Image
                    src={team.strFanart3}
                    width={400}
                    height={400}
                    alt={team.strTeam}
                    className="w-full rounded-lg md:w-[400px]"
                  />
                ) : null}
                {team.strFanart4 ? (
                  <Image
                    src={team.strFanart4}
                    width={400}
                    height={400}
                    alt={team.strTeam}
                    className="w-full rounded-lg md:w-[400px]"
                  />
                ) : null}
                {team.strBanner ? (
                  <Image
                    src={team.strBanner}
                    width={400}
                    height={400}
                    alt={team.strTeam}
                    className="w-full rounded-lg md:w-[400px]"
                  />
                ) : null}
              </div>
            )}
          </article>
        ))}
      </article>
    </Container>
  );
}
