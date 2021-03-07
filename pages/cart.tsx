import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { withUrqlClient } from "next-urql";
import Head from "next/head";
import React from "react";
import {
  CartProduct,
  Layout,
  CartOption,
  CartOptionsSection,
} from "../components";
import { useStateValue } from "../context/StateProvider";
import styles from "../styles/Cart.module.css";
import { CreateUrqlClient } from "../utils/createUrqlClient";
import ScrollToTop from "../utils/ScrollToTop";

const Cart: React.FC = () => {
  const { state } = useStateValue();

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
      </Head>
      <Layout navColor="#fff" className={styles.page}>
        <motion.div className={styles.productsContainer} variants={stagger}>
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

export default withUrqlClient(CreateUrqlClient, { ssr: false })(Cart);
