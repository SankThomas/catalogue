import Container from "@/components/fmcontainer";
import Image from "next/image";
import React from "react";

const data = [
  {
    title: "Supervisor",
    desc: "Monitors activity to identify project roadblocks",
    image: "/images/four-card-feature/icon-supervisor.svg",
    borderColor: "border-t-teal-400",
  },
  {
    title: "Team Builder",
    desc: "Scans our talent network to create the optimal team for your project",
    image: "/images/four-card-feature/icon-team-builder.svg",
    borderColor: "border-t-rose-600",
  },
  {
    title: "Calculator",
    desc: "Uses data from past projects to provide better delivery estimates",
    image: "/images/four-card-feature/icon-calculator.svg",
    borderColor: "border-t-blue-600",
  },
  {
    title: "Karma",
    desc: "Regularly evaluates our talent to ensure quality",
    image: "/images/four-card-feature/icon-karma.svg",
    borderColor: "border-t-yellow-400",
  },
];

export default function FourCardFeature() {
  return (
    <>
      <Container />
      <div className="bg-neutral-200 p-4 lg:p-16">
        <div className="h-full lg:flex lg:items-center lg:justify-center">
          <div className="mx-auto w-full max-w-6xl rounded-2xl bg-neutral-100 p-8">
            <h1 className="text-center text-4xl font-light text-neutral-900">
              Reliable, efficient delivery{" "}
              <span className="block font-bold">Powered by Technology</span>
            </h1>
            <p className="mx-auto max-w-lg text-center">
              Our Artificial Intelligence powered tools use millions of project
              data points to ensure that your project is successful
            </p>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
              {data.map((item) => (
                <article
                  className={`${item.borderColor} third:translate-y-1/2 max-w-xs transform space-y-4 rounded-lg border-t-[8px] bg-white p-6 shadow lg:[&:nth-last-child(2n)]:translate-y-1/2`}
                >
                  <h2 className="text-xl text-neutral-900">{item.title}</h2>
                  <p className="lg:text-base">{item.desc}</p>
                  <Image
                    src={item.image}
                    width={80}
                    height={80}
                    alt={item.title}
                    className="ml-auto block"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
