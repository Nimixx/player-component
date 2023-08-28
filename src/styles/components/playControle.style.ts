import { css } from "@emotion/react";
import { theme } from "../theme.style";

export const playBtn = (isPlaying: boolean) =>
  css({
    backgroundColor: isPlaying
      ? theme.colors.secondaryCol
      : theme.colors.bgControle,
    padding: "0.5rem",
    borderRadius: "0.7rem",
    color: "white",
    boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
    border: `1px solid ${theme.colors.bgControle}`,
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.bgColSec,
    },
    "&:focus": {
      outline: `2px solid ${theme.colors.primaryCol}`,
      backgroundColor: theme.colors.secondaryCol,
    },
  });
