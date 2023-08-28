import { css } from "@emotion/react";
import { theme } from "../theme.style";

export const volumeControl = css({
  width: "25rem",
  height: "1rem",
  cursor: "pointer",
  background: theme.colors.bgControle,
  borderRadius: "1rem",
  appearance: "none", 
  "&:focus": {
    outline: `1.5px solid ${theme.colors.primaryCol}`,
    backgroundColor: theme.colors.secondaryCol,
  },

 // Styles for Firefox
 "::-moz-range-thumb": {
    width: "20px",
    height: "20px",
    background: theme.colors.primaryCol,
    border: "none",
    borderRadius: "50%",
    boxShadow: "0 2px rgba(0, 0, 0, 0.2)",
  },

  // Styles for Chrome and other Webkit browsers
  "::-webkit-slider-thumb": {
    appearance: "none",
    width: "20px",
    height: "20px",
    background: theme.colors.primaryCol,
    border: "none",
    borderRadius: "50%",
    boxShadow: "0 2px rgba(0, 0, 0, 0.2)",
  },

  // Styles for all browsers
  "&::-ms-thumb": {
    width: "20px",
    height: "20px",
    background: theme.colors.primaryCol,
    border: "none",
    borderRadius: "50%",
    boxShadow: "0 2px rgba(0, 0, 0, 0.2)",
  },
});
