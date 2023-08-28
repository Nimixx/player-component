/** @jsxImportSource @emotion/react */

import { time } from "../styles/components/player.style";
import { useAudioTime } from "../hooks/useAudioTime";

type TimeDisplayProps = {
  audioRef: React.RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

function TimeDisplay({ audioRef, isPlaying }: TimeDisplayProps) {
  const formattedTime = useAudioTime(audioRef, isPlaying);

  return <p css={time}>{formattedTime}</p>;
}

export default TimeDisplay;

