"use client";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";

export function PixelatedProfile() {
  return (
    <div className="mx-auto flex items-center justify-center">
      <PixelatedCanvas
        src="/no-bg-profile.png"
        width={350}
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
        distortionStrength={25}
        distortionRadius={25}
        distortionMode='repel'
        followSpeed={0.3}
        jitterStrength={13}
        jitterSpeed={1}
        sampleAverage
        className="rounded-xl shadow-lg"
      />
    </div>
  );
}


export function PixelatedGod() {
  return (
    <div className="mx-auto flex items-center justify-center">
      <PixelatedCanvas
        src="/ganesha.png"
        width={600}
        height={710}
        cellSize={4}
        dotScale={0.5}
        shape="circle"
        backgroundColor="#0d0e0f"
        dropoutStrength={0.01}
        interactive
        responsive
        distortionStrength={25}
        distortionRadius={25}
        distortionMode='attract'
        followSpeed={0.3}
        jitterStrength={20}
        jitterSpeed={1}
        sampleAverage
      />
    </div>
  );
}
