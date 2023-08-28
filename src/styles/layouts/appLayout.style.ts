import { css } from "@emotion/react";
import { theme } from "../theme.style";

export const container = css({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.8rem",
  height: "100vh",
  width: "100%",
  background: `linear-gradient(180deg, ${theme.colors.gradEnd}, ${theme.colors.gradStart})`,
  "@-moz-document url-prefix()": {
    background: theme.colors.bgCol,
  },
});
