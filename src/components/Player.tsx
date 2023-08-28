/** @jsxImportSource @emotion/react */

import { useTogglePlay } from "../hooks/useTogglePlay";
import { useVolumeControl } from "../hooks/useVolumeControl";
import {
  container,
  wrapper,
  cover,
  song,
  artist,
} from "../styles/components/player.style";

import CoverSrc from "../assets/cover.webp";
import LofiSound from "../assets/music/progress.mp3";
import PlayControle from "./PlayControle";
import VolumeControle from "./VolumeControle";
import TimeDisplay from "./TimeDisplay";

export default function Player() {
  const { audioRef, isPlaying, togglePlay, handleStop } = useTogglePlay();
  const { volume, handleVolume } = useVolumeControl(audioRef);

  return (
    <>
      <section css={container(isPlaying)}>
        <article css={wrapper}>
          <a
            href="https://pixabay.com/music/future-bass-lifelike-126735/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img css={cover} src={CoverSrc} alt="Artist cover" />
          </a>
          <section>
            <h2 css={song(isPlaying)}>Lifelike</h2>
            <p css={artist}>AlexiAction</p>
            <TimeDisplay audioRef={audioRef} isPlaying={isPlaying} />
          </section>
        </article>
        <PlayControle isPlaying={isPlaying} handleClick={togglePlay} />
        <audio ref={audioRef} src={LofiSound} onEnded={handleStop}></audio>
      </section>
      <VolumeControle volume={volume} handleVolume={handleVolume} />
    </>
  );
}
