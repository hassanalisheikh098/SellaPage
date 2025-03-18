"use client";
import React from "react";
import pic from "../../../../public/tabpic.png"
import { ContainerScroll } from "../../../components/ui/Tablet";


const SocialIcon = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="text-white hover:text-primary transition-colors duration-300 transform hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{label}</span>
      {React.cloneElement(icon, { size: 45 })}
    </a>
  )
}

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent">
          -- See Sella in Action -- <br />
              <span className="text-5xl md:text-[6rem] font-bold mt-1 leading-none">
              Watch how Sella engages 
              </span>
            </h1>
          </>
        }
      >
        <img
          src= {pic}
          alt="hero"
          height={1700}
          width={800}
          className="mx-auto rounded-2xl object-cover object-left-top w-full h-full"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
