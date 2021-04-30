import { Snackbar, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Skeleton from "@material-ui/lab/Skeleton";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../api-functions/queries/fetchProducts";
import { Layout, Category, AskToLogin } from "../components";
import useStyles from "../mui-styles/Home_Styles";
import ScrollToTop from "../utils/ScrollToTop";
import useGetUser from "../utils/useGetUser";
import CustomHead from "../utils/CustomHead";
import { Blob1, Blob2, Blob3, Blob4 } from "../components/svg/Blob";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Index: NextPage = () => {
  const classes = useStyles();
  const { isLoading, isError, data } = useQuery("products", fetchProducts, {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const [open, setOpen] = React.useState(true);
  const [askOpen, setAskOpen] = React.useState(true);
  const [user, isLoadingUser, isErroredUser] = useGetUser();

  const handleClose = (_event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

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
        <motion.div variants={stagger}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            height="calc(100vh - 64px)"
            overflow="hidden"
            className={classes.main}
          >
            <Box
              width="40%"
              display="flex"
              flexDirection="column"
              justifyContent="flex-start"
              pt="150px"
              position="relative"
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
            <img className={classes.img} src="/apple.png" />
            <Blob1 />
            <Blob2 />
            <Blob3 />
            <Blob4 />
          </Box>

          {!isLoadingUser && !user ? (
            <AskToLogin askOpen={askOpen} setAskOpen={setAskOpen} />
          ) : null}

          <h1 style={{ textAlign: "center" }}>Shop by Categories</h1>
          <Box className={classes.categoryCont}>
            <Category
              title="Electronics"
              src="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              href="/new/electronics"
            />

            <Category
              title="SkinCare"
              src="https://images.unsplash.com/photo-1531895861208-8504b98fe814?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
              href="/new/skincare"
            />
            <Category
              title="Food"
              src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              href="/new/food"
            />
            <Category
              title="Juices"
              src="https://images.unsplash.com/photo-1544619371-2aacd756277d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
              href="/new/juices"
            />
          </Box>

          {/* <Box
            mx="auto"
            justifyContent="space-between"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            px="auto"
            alignItems="center"
            className={classes.productsContainer}
          >
            {isLoading &&
              [1, 2, 3, 4, 5, 6].map((_, i) => (
                <Skeleton
                  variant="rect"
                  height={400}
                  width={450}
                  animation="wave"
                  style={{
                    borderRadius: "12px",
                    marginBottom: 15,
                    marginTop: 15,
                  }}
                  key={i}
                />
              ))}

            {data &&
              data.map(({ _id, imageURL, price, rating, title }: any) => (
                <Link
                  scroll={false}
                  href="/products/[productId]"
                  as={`/products/${_id}`}
                >
                  <a className={classes.link}>
                    <Product
                      key={_id}
                      id={_id}
                      imageURL={imageURL}
                      rating={rating}
                      title={title}
                      price={price}
                    />
                  </a>
                </Link>
              ))}
          </Box> */}
        </motion.div>

        {isError && (
          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={open}
            onClose={handleClose}
          >
            <Alert onClose={handleClose} severity="error">
              Something went wrong
            </Alert>
          </Snackbar>
        )}
      </Layout>
      <ScrollToTop />
    </motion.div>
  );
};

export default Index;
