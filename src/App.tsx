import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme.style";
import AppLayout from "./layouts/AppLayout";
import Player from "./components/Player";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppLayout>
        <Player />
      </AppLayout>
    </ThemeProvider>
  );
}
