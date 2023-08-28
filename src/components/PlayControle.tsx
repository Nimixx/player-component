/** @jsxImportSource @emotion/react */

import { playBtn } from "../styles/components/playControle.style";
import { Play, Pause } from "lucide-react";

type SettingsProps = {
  isPlaying: boolean;
  handleClick: () => void;
};

export default function PlayControle({
  isPlaying,
  handleClick,
}: SettingsProps) {
  return (
    <button
      css={playBtn(isPlaying)}
      onClick={handleClick}
      onKeyDown={(event) => {
        if (event.code === "Space") {
          event.stopPropagation();
        }
      }}
    >
      {isPlaying ? <Pause /> : <Play />}
    </button>
  );
}
