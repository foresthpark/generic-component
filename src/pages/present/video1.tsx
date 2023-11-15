import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function VideoOnePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const ref = videoRef.current;
      ref.autoplay = true;
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <span className="text-4xl">{`There's gotta be a better way!`}</span>
      <video ref={videoRef} controls autoPlay className="w-3/5 p-10">
        <source
          src="https://y.yarn.co/ff9841cd-734e-4e06-944c-ff8cf86765bb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          href="/present/video2"
          className="text-2xl font-semibold leading-6 text-gray-900"
        >
          Next <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}
