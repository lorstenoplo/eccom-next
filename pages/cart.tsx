import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { CartOptionsSection, CartProduct, Layout } from "../components";
import { useStateValue } from "../context/StateProvider";
import useStyles from "../mui-styles/Cart_Styles";
import ScrollToTop from "../utils/ScrollToTop";
import { NextPage } from "next";

const cart: NextPage = () => {
  const { state } = useStateValue();
  const classes = useStyles();
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Head>
        <title>Cart | Review your items in cart</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout navColor="#fff" className={classes.page}>
        <motion.div className={classes.productsContainer} variants={stagger}>
          {state.basket.map(({ id, title, imageURL, price, rating }, i) => (
            <CartProduct
              key={i}
              id={id}
              title={title}
              imageURL={imageURL}
              price={price}
              rating={rating}
            />
          ))}
        </motion.div>
        <CartOptionsSection />
      </Layout>
      <ScrollToTop />
    </motion.div>
  );
};

export default cart;
