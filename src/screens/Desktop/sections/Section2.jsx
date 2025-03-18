"use client";;
import React from "react";
import { BackgroundGradient } from "../../../components/ui/Background-gradient";
import { Tilt } from '@jdion/tilt-react';

export function BackgroundGradientDemo() {
  const cardData = [
    {
      imgSrc: "public/visual-3.png",
      title: "Natural Engagement",
      description: "Engages visitors with human-like conversations that build trust and rapport.",
      price: "Builds rapport with visitors"
    },
    {
      imgSrc: "public/visual-3.png",
      title: "Smart Lead Scoring",
      description: "Identifies and prioritizes high-value prospects based on buying intent signals.",
      price: "Identifies high-value prospects"
    },
    {
      imgSrc: "public/visual-3.png",
      title: "Automated Booking",
      description: "Schedules meetings directly into your calendar when prospects are ready to talk.",
      price: "Syncs with your calendar"
    },
    {
      imgSrc: "public/visual-3.png",
      title: "Actionable Insights",
      description: "Provides in-depth conversation analysis and ready-to-use email templates for follow-ups.",
      price: "Analyzes conversation patterns"
    }
  ];

  return (
    <>
    <div className="flex justify-center pt-9">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-[#a855f7] bg-clip-text text-transparent ">
          Features
        </h2>
      </div>
      <br></br>
    <div className="grid grid-cols-2 gap-4 p-32 pt-0">
      {cardData.map((card, index) => (
        <Tilt key={index} style={{ height: 'auto', width: 'auto' }}>
          <BackgroundGradient className="rounded-[22px] max-w-md p-4 sm:p-10 bg-gradient-to-b from-black to-[#a855f7] dark:bg-zinc-900 mx-auto">
            <img
              className="w-[300px] h-[300px] object-cover mb-2 mr-16"
              alt="Visual"
              src={card.imgSrc}
            />
            <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
              {card.title}
            </p>
            <p className="text-sm text-black">
              {card.description}
            </p>
            <button
              className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
              <span></span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                {card.price}
              </span>
            </button>
          </BackgroundGradient>
        </Tilt>
      ))}
    </div>
    </>
  );
}
