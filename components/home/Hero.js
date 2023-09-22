import React from "react";
import LongButtonWArrowCustomized from "../general/LongButtonWArrow";
import SVGAnimation from "./SVGAnimation.jsx";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <a id="home">
      <div
        style={{
          height: "95vh",
          background: "#FCFAFF",
          overflow: "hidden",
          borderBottom: "1px solid black",
          borderTop: "1px solid black",
        }}
      >
        <SVGAnimation className="fixed top-0 left-0 -z-10 pt-4" />
        <div className="flex pt-8 desktop:flex-row mobile:flex-col px-8 mobile:px-0 w-full mobile:gap-y-8 tablet:gap-x-10 relative z-10 ">
          <div className="relative flex flex-col flex desktop:pt-9 desktop:items-start mobile:items-center gap-y-10 mobile:px-8 desktop:ps-20 desktop:px-10 mobile:text-center desktop:text-left">
            <h1
              style={{
                fontSize: "calc(16px + 5vmin)",
                fontFamily: "Space Grotesk",
                fontWeight: "500",
                lineHeight: "1.3",
              }}
              className="desktop:w-2/5"
            >
              Stanford's premier entrepreneurship society
            </h1>
            <LongButtonWArrowCustomized
              text={"Apply to 2023-2024 ASES Bootcamp today"}
            />
          </div>
          <div className="flex align-end justify-center pt-5">
            <video
              autoPlay
              loop
              muted
              className="object-cover desktop:h-screen mobile:h-5/6"
            >
              <source
                src="/hero-video-vp9-chrome.webm"
                type='video/webm; codecs="hvc1"'
              />
              <source src="hero-video-hevc-safari.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </a>
  );
}