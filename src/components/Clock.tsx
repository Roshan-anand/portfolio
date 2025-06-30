import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

export default function DigitalClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format time for India timezone (IST)
      const timeString = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(timeString);
    };

    // Update immediately
    updateTime();

    // Update every minute
    const interval = setInterval(updateTime, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/10">
      <div className="text-center space-y-4">
        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-white/80 text-sm">
          <MapPin className="w-4 h-4" />
          <span>India (IST)</span>
        </div>

        {/* Digital Time Display */}
        <h3 className="text-accent-g">{time}</h3>

        {/* Decorative elements */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-accent-r rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-accent-g rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-accent-b rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}
