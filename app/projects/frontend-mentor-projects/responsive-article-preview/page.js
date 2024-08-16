"use client";

import Container from "@/components/fmcontainer";
import { Button } from "@/components/ui/button";
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Facebook, ReplyIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function page() {
  const [showShare, setShowShare] = useState(false);

  return (
    <>
      <Container />
      <div className="bg-[#ECF2F8] p-4 lg:flex lg:h-screen lg:items-center lg:justify-center">
        <div className="mx-auto grid max-w-4xl gap-8 overflow-hidden rounded-lg bg-white lg:grid-cols-2">
          <article>
            <Image
              src="/images/responsive-article-preview/drawers.jpg"
              alt="Drawers"
              height={800}
              width={1024}
              className="h-full w-full"
            />
          </article>

          <article className="space-y-4 p-6">
            <h2 className="text-2xl text-slate-800">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h2>
            <p className="text-slate-600">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I&apos;ve got some simple
              tips to help you make any room feel complete.
            </p>

            <div className="relative flex flex-wrap items-center justify-between gap-8">
              <article className="flex items-center gap-4">
                <Image
                  src="/images/responsive-article-preview/avatar-michelle.jpg"
                  alt="Michelle Appleton"
                  height={60}
                  width={60}
                  className="rounded-full"
                />
                <ul>
                  <li className="font-bold text-slate-800">
                    Michelle Appleton
                  </li>
                  <li className="text-sm text-slate-600">14 August 2024</li>
                </ul>
              </article>

              <Button
                onClick={() => setShowShare(!showShare)}
                className="h-14 rounded-full bg-transparent text-slate-600 transition hover:bg-slate-800 hover:text-white"
              >
                <ReplyIcon />
              </Button>

              {showShare && (
                <article className="absolute bottom-0 right-0 flex w-full items-center justify-start gap-4 rounded-lg bg-slate-800 px-4 py-5 lg:bottom-16 lg:w-auto">
                  <p className="uppercase text-white">Share</p>
                  <ul className="flex items-center justify-center gap-4">
                    <li>
                      <Facebook className="h-6 w-6 cursor-pointer transition hover:text-white" />
                    </li>
                    <li>
                      <InstagramLogoIcon className="h-6 w-6 cursor-pointer transition hover:text-white" />
                    </li>
                    <li>
                      <TwitterLogoIcon className="h-6 w-6 cursor-pointer transition hover:text-white" />
                    </li>
                    <li className="lg:hidden">
                      <XIcon
                        onClick={() => setShowShare(false)}
                        className="h-6 w-6 cursor-pointer transition hover:text-white"
                      />
                    </li>
                  </ul>
                </article>
              )}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
