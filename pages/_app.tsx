import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { reducer } from "../context/reducer";
import { initialState, StateProvider } from "../context/StateProvider";
import "../styles/globals.css";
import { theme } from "../utils/MuiTheme";
import { queryClient } from "../utils/queryClient";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <AnimatePresence exitBeforeEnter>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </QueryClientProvider>
      </ThemeProvider>
    </StateProvider>
  );
}

export default MyApp;
