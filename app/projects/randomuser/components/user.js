"use client";

import React, { useEffect, useState } from "react";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import Image from "next/image";
import {
  CakeIcon,
  MapPinIcon,
  PhoneIcon,
  RectangleEllipsis,
} from "lucide-react";

export default function User() {
  const [users, setUsers] = useState([]);

  async function getUser() {
    const res = await fetch("https://randomuser.me/api/");
    const data = await res.json();
    setUsers(data.results);
    console.log(data.results);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <div className="mb-8 text-center">
        <h1>Random user app</h1>
        <CardDescription>
          This app uses the{" "}
          <a href="https://randomuser.me" className="text-white underline">
            Randomuser API
          </a>{" "}
          to get fake random user profiles
        </CardDescription>
      </div>

      <div>
        {users ? (
          <div>
            {users.map((person) => (
              <Card
                key={person.login.uuid}
                className="mx-auto max-w-2xl text-center"
              >
                <CardHeader>
                  <Image
                    src={person.picture.large}
                    width={120}
                    height={120}
                    className="mx-auto mb-4 block rounded-full border-4 border-white"
                    alt={person.name.first}
                  />
                </CardHeader>

                <CardContent className="space-y-4">
                  <CardTitle>
                    {person.name.title}. {person.name.first} {person.name.last}
                  </CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <EnvelopeClosedIcon /> {person.email}
                  </CardDescription>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <CakeIcon />{" "}
                    {format(new Date(person.dob.date), "do MMMM yyyy")}
                  </CardDescription>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <MapPinIcon /> {person.location.street.number}{" "}
                    {person.location.street.name}
                  </CardDescription>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <PhoneIcon /> {person.cell}
                  </CardDescription>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <RectangleEllipsis /> {person.login.password}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
            <div className="mt-8 text-center" variant="secondary">
              <Button variant="secondary" onClick={getUser}>
                Get another random profile
              </Button>
            </div>
          </div>
        ) : (
          <p>Loading profiles</p>
        )}
      </div>
    </Container>
  );
}
