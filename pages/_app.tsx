import { CssBaseline, ThemeProvider } from "@material-ui/core";
import { AnimatePresence } from "framer-motion";
import { reducer } from "../context/reducer";
import { initialState, StateProvider } from "../context/StateProvider";
import "../styles/globals.css";
import { theme } from "../utils/MuiTheme";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps, router }: any) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AnimatePresence exitBeforeEnter>
            <Component key={router.route} {...pageProps} />
          </AnimatePresence>
        </ThemeProvider>
      </StateProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
