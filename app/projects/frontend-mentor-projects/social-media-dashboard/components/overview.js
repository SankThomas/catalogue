import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const cards = [
  {
    title: "Page Views",
    icon: "/images/social-media-dashboard/icon-facebook.svg",
    number: "87",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    upNumber: "3%",
    isUp: true,
  },
  {
    title: "Likes",
    icon: "/images/social-media-dashboard/icon-facebook.svg",
    number: "52",
    upDownIcon: "/images/social-media-dashboard/icon-down.svg",
    upNumber: "2%",
    isUp: false,
  },
  {
    title: "Likes",
    icon: "/images/social-media-dashboard/icon-instagram.svg",
    number: "5462",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    upNumber: "2257%",
    isUp: true,
  },
  {
    title: "Profile Views",
    icon: "/images/social-media-dashboard/icon-facebook.svg",
    number: "52k",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    upNumber: "1375%",
    isUp: true,
  },
  {
    title: "Retweets",
    icon: "/images/social-media-dashboard/icon-twitter.svg",
    number: "117",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    upNumber: "303%",
    isUp: true,
  },
  {
    title: "Likes",
    icon: "/images/social-media-dashboard/icon-instagram.svg",
    number: "507",
    upDownIcon: "/images/social-media-dashboard/icon-up.svg",
    upNumber: "553%",
    isUp: true,
  },
  {
    title: "Likes",
    icon: "/images/social-media-dashboard/icon-youtube.svg",
    number: "107",
    upDownIcon: "/images/social-media-dashboard/icon-down.svg",
    upNumber: "19%",
    isUp: false,
  },
  {
    title: "Total Views",
    icon: "/images/social-media-dashboard/icon-youtube.svg",
    number: "1407",
    upDownIcon: "/images/social-media-dashboard/icon-down.svg",
    upNumber: "12%",
    isUp: false,
  },
];

export default function Overview() {
  return (
    <div>
      <h2 className="mb-8 text-xl lg:text-2xl">Overview - Today</h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg text-neutral-300">
                  {card.title}
                </CardTitle>
                <Image
                  src={card.icon}
                  width={20}
                  height={20}
                  alt={card.title}
                />
              </div>
            </CardHeader>

            <CardContent className="flex items-center justify-between">
              <h2 className="text-2xl lg:text-4xl">{card.number}</h2>
              <p
                className={`flex items-center gap-2 font-bold ${card.isUp ? "text-emerald-500" : "text-rose-500"}`}
              >
                <Image
                  src={card.upDownIcon}
                  height={14}
                  width={14}
                  alt="up down icon"
                />{" "}
                {card.upNumber}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
