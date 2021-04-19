import React from "react";
import { Container, CircularProgress } from "@material-ui/core";
import { motion } from "framer-motion";
import Head from "next/head";

const LoadingScreen: React.FC = () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Loading...</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Container
        style={{
          height: "100vh",
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CircularProgress color="primary" size={50} />
      </Container>
    </motion.div>
  );
};

export default LoadingScreen;
