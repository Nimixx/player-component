/** @jsxImportSource @emotion/react */

import React from "react";
import { volumeControl } from "../styles/components/volumeControle.style";

type VolumeControleProps = {
  volume: number;
  handleVolume: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function VolumeControle({
  volume,
  handleVolume,
}: VolumeControleProps) {
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      value={volume}
      onChange={handleVolume}
      css={volumeControl}
    />
  );
}
