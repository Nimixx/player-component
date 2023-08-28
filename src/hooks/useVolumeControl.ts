import { useEffect, RefObject, useState } from "react";

export function useVolumeControl(audioRef: RefObject<HTMLAudioElement | null>) {
  const [volume, setVolume] = useState(0.1);

  const handleVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [audioRef, volume]);

  return {
    volume,
    handleVolume,
  };
}
