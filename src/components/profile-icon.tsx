"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelatedProfile() {
  return (
    <div className="flex w-full items-center justify-center">
      <PixelatedCanvas
        src="/no-bg-profile.png"
        width={350}
        height={250}
        cellSize={2}
        dotScale={0.9}
        shape="square"
        backgroundColor="#0d0d0d"
        dropoutStrength={0.2}
        interactive
        distortionStrength={15}
        distortionRadius={25}
        distortionMode="repel"
        followSpeed={0.3}
        jitterStrength={5}
        jitterSpeed={1}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
        className="rounded-xl"
        fadeOnLeave
        fadeSpeed={0.1}
      />
    </div>
  );
}
