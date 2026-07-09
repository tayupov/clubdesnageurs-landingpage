"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative h-svh w-full overflow-hidden bg-black">
      <video
        ref={(el) => {
          if (el) el.playbackRate = 0.75;
        }}
        className="absolute inset-0 h-full w-full object-cover object-[45%_center] opacity-70 md:object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-black/40" />
      <i className="font-serif absolute top-48 left-[38px] z-10 origin-left -rotate-90 text-xl whitespace-nowrap text-white/90 sm:text-2xl">
        The 42 Company
      </i>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 px-6 text-center text-white" />
      <div className="absolute inset-x-0 bottom-12 z-10 px-6 text-left text-white sm:inset-x-auto sm:bottom-20 sm:left-1/4 sm:max-w-lg sm:-translate-x-1/2">
        <p className="font-serif mt-3 text-sm font-bold text-white/80 sm:text-base">
          Introducing Earth - our newest functional fragrance, designed for the seamless transition from focus to activity. 
          <br/><br/>
          Notes of pressed bergamot, italian lemon and mineral salt.
        </p>
        <Link
          href="/earth"
          className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-medium text-black hover:bg-white/90"
        >
          Shop "Earth"
        </Link>
      </div>
    </div>
  );
}
