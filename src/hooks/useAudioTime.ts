import { useEffect, useState } from "react";

export function useAudioTime(audioRef: React.RefObject<HTMLAudioElement>, isPlaying: boolean) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audioRef.current?.currentTime || 0);
    };

    let intervalId: number | null = null;

    if (isPlaying) {
      intervalId = window.setInterval(updateCurrentTime, 1000);
      console.log("Event time" + " " + "%c anded", "color: lime");
    }

    return () => {
      if (intervalId) {
        window.clearInterval(intervalId);
        console.log("Event timer" + " " + "%c removed", "color: red");
      }
    };
  }, [audioRef, isPlaying]);

  useEffect(() => {
    if (!isPlaying) {
      setCurrentTime(0);
    }
  }, [isPlaying]);

  const formattedTime = `${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60)
    .toString()
    .padStart(2, "0")}`;

  return formattedTime;
}
