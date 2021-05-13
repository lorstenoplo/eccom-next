import { Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { motion } from "framer-motion";
import { NextPage } from "next";
import React from "react";
import { Layout, Category, AskToLogin } from "../components";
import useStyles from "../mui-styles/Home_Styles";
import ScrollToTop from "../utils/ScrollToTop";
import useGetUser from "../utils/useGetUser";
import CustomHead from "../utils/CustomHead";

const Index: NextPage = () => {
  const classes = useStyles();
  const [askOpen, setAskOpen] = React.useState(true);
  const [user, isLoadingUser, isErroredUser] = useGetUser();

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
      className={classes.container}
    >
      <CustomHead title="GoLoop" />
      <Layout className={classes.body}>
        <motion.div style={{ width: "100%" }} variants={stagger}>
          <Box
            style={{ backgroundImage: "url(https://i.ibb.co/GPxr02K/bg.jpg)" }}
            height="calc(100vh - 64px)"
            position="absolute"
            top="64px"
            left={0}
            className={classes.main}
          >
            <Box
              width="40%"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              pt="150px"
              height="100%"
            >
              <h1 className={classes.wlcmTitle}>
                Welcome to the world's best ecommerce store
              </h1>
              <Typography variant="body1">
                It's the workspace that inspires the plant. Got anything in your
                mind we got it here. You get anytime and at any place. Drinking
                coffe you can shop now too.
              </Typography>
              <Box mt={2}>
                <Typography variant="body2" color="textSecondary">
                  Wooo! you just landed on the best ecommerce site on the planet
                </Typography>
              </Box>
            </Box>
            <img
              src="https://i.ibb.co/PmspZjD/apple.png"
              alt="hero-feature"
              className={classes.img}
            />
          </Box>
          <Box className={classes.dummy} height="100vh"></Box>
          {!isLoadingUser && !user ? (
            <AskToLogin askOpen={askOpen} setAskOpen={setAskOpen} />
          ) : null}

          <h1 style={{ textAlign: "center" }}>Shop by Categories</h1>
          <Box className={classes.categoryCont}>
            <Category
              title="Electronics"
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              href="/electronics"
            />

            <Category
              title="SkinCare"
              src="https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
              href="/skincare"
            />
            <Category
              title="Food"
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              href="/food"
            />
            <Category
              title="Juices"
              src="https://images.unsplash.com/photo-1544619371-2aacd756277d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              href="/juices"
            />
          </Box>
        </motion.div>
      </Layout>
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
