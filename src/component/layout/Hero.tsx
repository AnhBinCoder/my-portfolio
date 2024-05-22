"use client";

import Arrow from "@/static/Arrow";
import SocialMedia from "@/static/SocialMedia";
import Typing from "@/static/Typing";
import Link from "next/link";

function Hero() {
  return (
    <div className="flex items-center flex-col min-h-screen desktop:px-20 mobile:p-6 bg-gradient-to-r from-gradientLeft to-gradientRight">
      <div className="flex mobile:justify-center desktop:flex-row desktop:items-center mobile:flex-col-reverse items-center w-full flex-1">
        <div className="flex flex-col z-20 pointer-events-none text-white desktop:w-3/5 mobile:w-full mobile:text-center">
          <p className="desktop:text-[5vw] mobile:text-[8vw] font-bold text-lightcyan w-full">
            Welcome, I&apos;m Hung
          </p>
          <p className="desktop:text-[3vw] mobile:text-[5vw]">
            an application developer with expertise in web applications with
            <Typing />
          </p>
          <div className="flex mobile:hidden mt-6 justify-start w-[17vw]">
            <SocialMedia size={200} />
          </div>
        </div>
        <img
          className="w-2/5 mobile:w-full mobile:max-w-xl object-contain self-center"
          src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/263152050_3247317165548050_7369878207900812980_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEvUThxlC_yBuUOwc5ScRZ76TzpfWYd317pPOl9Zh3fXjc8nZyn3VGtCZ8cRk1-K2UtfDZdM2PsLOXCsIAM3lEz&_nc_ohc=7DNwtYLJP8gQ7kNvgGYmgy8&_nc_ht=scontent.fsgn2-6.fna&oh=00_AYA5Au3hX6LcKXJybokTrp3AxQQA2oMZ5oJHo7O2x3Ss3Q&oe=66539829"
          alt="Portrait"
        />
      </div>
      <div className="desktop:absolute desktop:bottom-10 inset-0 flex items-end py-2 justify-center z-10">
      </div>
    </div>
  );
}

export default Hero;
