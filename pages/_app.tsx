import { ThemeProvider, CssBaseline } from "@material-ui/core";
import "../styles/globals.css";
import { theme } from "../utils/MuiTheme";

function MyApp({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
