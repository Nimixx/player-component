import { css } from "@emotion/react";
import { theme } from "../theme.style";

export const container = (isPlaying: boolean) =>
  css({
    width: "30rem",
    minHeight: "10rem",
    borderRadius: "1rem",
    padding: "1rem",
    backgroundColor: theme.colors.bgColSec,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: `1px solid ${theme.colors.bgControle}`,
    transition: "box-shadow 0.4s ease-in-out",
    boxShadow: `${
      isPlaying ? "0 0 2rem #f7f9fa23" : "0 0 1rem rgba(0, 0, 0, 0.2)"
    }}`,
    backdropFilter: "blur(1rem)",
  });

export const wrapper = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
});

export const cover = css({
  width: "7rem",
  height: "7rem",
  borderRadius: "1rem",
  boxShadow: "0 0 1rem rgba(0, 0, 0, 0.2)",
});

export const song = (isPlaying: boolean) =>
  css({
    fontSize: "1.8rem",
    fontWeight: "bold",
    transition: "color 0.4s ease-in-out",
    color: isPlaying ? theme.colors.primaryCol : theme.colors.textColor,
  });

export const artist = css({
  fontSize: "1.4rem",
  color: theme.colors.textColor,
});

export const time = css({
  fontSize: "1.2rem",
  color: theme.colors.textSecColor,
});
