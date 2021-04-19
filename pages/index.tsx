import { Snackbar } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Skeleton from "@material-ui/lab/Skeleton";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";
import { fetchProducts } from "../api-functions/queries/fetchProducts";
import { Layout, Product, AskToLogin } from "../components";
import useStyles from "../mui-styles/Home_Styles";
import ScrollToTop from "../utils/ScrollToTop";
import useGetUser from "../utils/useGetUser";

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
      <Head>
        <title>GoLoop</title>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta
          name="description"
          content="Best eccomerce site on the planet"
        ></meta>
      </Head>
      <Layout className={classes.body}>
        <motion.div variants={stagger}>
          {!isLoadingUser && !user ? (
            <AskToLogin askOpen={askOpen} setAskOpen={setAskOpen} />
          ) : null}
          <Box
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
          </Box>
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
