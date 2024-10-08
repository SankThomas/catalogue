import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const cards = [
  {
    socialImage: "/images/social-media-dashboard/icon-facebook.svg",
    tag: "@nathanf",
    number: "1987",
    title: "Followers",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    up: "12 today",
    isUp: true,
    color: "#2562EA",
  },
  {
    socialImage: "/images/social-media-dashboard/icon-twitter.svg",
    tag: "@nathanf",
    number: "1044",
    title: "Followers",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    up: "99 today",
    isUp: true,
    color: "#3B82F6",
  },
  {
    socialImage: "/images/social-media-dashboard/icon-instagram.svg",
    tag: "@realnathanf",
    number: "11k",
    title: "Followers",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    up: "1099 today",
    isUp: true,
    color: "#EC7E80",
  },
  {
    socialImage: "/images/social-media-dashboard/icon-youtube.svg",
    tag: "@Nathan F.",
    number: "8239",
    title: "Subscribers",
    upDownIcon: "/images/social-media-dashboard/icon-down.svg",
    up: "144 today",
    isUp: false,
    color: "#B91D1D",
  },
];

export default function Hero() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => (
        <Card
          key={index}
          style={{
            borderTopWidth: 12,
            borderTopStyle: "solid",
            borderTopColor: `${card.color}`,
          }}
          className="text-center"
        >
          <CardHeader>
            <div className="flex items-center justify-center gap-2">
              <Image
                src={card.socialImage}
                height={20}
                width={20}
                alt={card.tag}
              />
              <p className="font-bold">{card.tag}</p>
            </div>
          </CardHeader>

          <CardContent>
            <h2 className="text-4xl lg:text-5xl">
              {card.number}{" "}
              <span className="block text-lg font-light uppercase text-neutral-600">
                {card.title}
              </span>
            </h2>

            <p
              className={`mt-8 flex items-center justify-center gap-2 font-bold ${card.isUp ? "text-emerald-500" : "text-rose-500"}`}
            >
              <Image
                src={card.upDownIcon}
                height={14}
                width={14}
                alt="up down icon"
              />{" "}
              {card.up}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
