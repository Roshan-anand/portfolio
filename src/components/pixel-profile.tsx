"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelatedProfile() {
  return (
    <div className="mx-auto mt-8 flex w-full items-center justify-center">
      <PixelatedCanvas
        src="/no-bg-profile.png"
        width={400}
        height={300}
        cellSize={4}
        dotScale={0.6}
        shape="circle"
        backgroundColor="#0d0e0f"
        // tintColor="#7c6f64"
        // tintColor="#d4be98"
        // tintStrength={0.2}
        dropoutStrength={0.009}
        interactive
        responsive
        distortionStrength={15}
        distortionRadius={30}
        distortionMode='repel'
        followSpeed={0.3}
        jitterStrength={4}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}