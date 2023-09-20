import React from "react";
import ShortButton from "../general/ShortButton";

export default function BootcampHeader() {
  return (
    <div
      className="w-full desktop:pb-24 mobile:pb-8"
      style={{ borderBottom: "1px solid black" }}
    >
      <video
        className="fixed -z-10 w-auto object-cover mobile:min-h-full mobile:min-w-full desktop:min-h-auto x-0 y-0"
        autoPlay
        loop
        muted
      >
        <source src="/bootcamp-hero-gradient.mp4" type="video/mp4" />
      </video>
      <div className="flex pt-8 desktop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-2 desktop:justify-around desktop:px-12 overflow-hidden">
        <div className="relative flex flex-col flex mobile:w-full desktop:w-2/5 desktop:pt-9 desktop:pl-9 desktop:items-start mobile:items-center gap-y-10 mobile:px-8 mobile:text-center desktop:text-left">
          <h1
            className=" desktop:w-2/5"
            style={{
              fontSize: "calc(16px + 5vmin)",
              fontFamily: "Space Grotesk",
            }}
          >
            ASES Bootcamp
          </h1>
          <p
            style={{
              fontSize: "calc(12px + 2vmin)",
              fontFamily: "Space Grotesk",
              fontWeight: "light",
            }}
          >
            Solve wicked problems in our 12-week design-thinking intensive
          </p>
          <ShortButton text={"Apply today"} />
        </div>
        <div className="flex items-center justify-center desktop:pt-5 mobile:pt-2 mobile:pb-8">
          <img src="/bootcamp-header.png" className="align-self-center" />
        </div>
      </div>
    </div>
  );
}
