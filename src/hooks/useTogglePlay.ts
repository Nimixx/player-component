import { useRef, useState, useEffect } from "react";

export function useTogglePlay() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying((currentIsPlaying) => !currentIsPlaying);
  };

  const handleStop = () => {
    setIsPlaying(false);
  }

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === "Space") {
        togglePlay();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    console.log("Event play" + " " + "%c anded", "color: lime");

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      console.log("Event play" + " " + "%c removed", "color: red");
    };
  }, []);

  return {
    audioRef,
    isPlaying,
    togglePlay,
    handleStop
  };
}
