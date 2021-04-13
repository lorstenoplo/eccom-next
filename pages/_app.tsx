import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { reducer } from "../context/reducer";
import { initialState, StateProvider } from "../context/StateProvider";
import "../styles/globals.css";
import { theme } from "../utils/MuiTheme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../utils/queryClient";

function MyApp({ Component, pageProps, router }: any) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence exitBeforeEnter>
          <QueryClientProvider client={queryClient}>
            <Component key={router.route} {...pageProps} />
          </QueryClientProvider>
        </AnimatePresence>
      </ThemeProvider>
    </StateProvider>
  );
}

export default MyApp;
