import Link from "next/link";
import React, { useEffect, useRef } from "react";

export default function VideoOnePage() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      const ref = videoRef.current;
      ref.currentTime = 1.2;
    }
  }, []);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <span className="text-4xl">
        {`And there is `}
        <s>Kevin</s> guys!
      </span>

      <video ref={videoRef} controls autoPlay className="w-full p-10">
        <source
          src="https://y.yarn.co/0579e415-8344-455b-bac7-8ce2b4673b25.mp4"
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
