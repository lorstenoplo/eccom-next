import { motion } from "framer-motion";
import { NextPage } from "next";
import React from "react";
import { CartOptionsSection, CartProduct, Layout } from "../components";
import { useStateValue } from "../context/StateProvider";
import useStyles from "../mui-styles/Cart_Styles";
import CustomHead from "../utils/CustomHead";
import ScrollToTop from "../utils/ScrollToTop";

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
      <CustomHead title="Cart | Review your items in cart" />
      <Layout navColor="#fff" className={classes.page}>
        <motion.div className={classes.productsContainer} variants={stagger}>
          {state.basket.map(
            ({ _id, title, imageURL, price, rating, category }, i) => (
              <CartProduct
                key={i}
                _id={_id}
                title={title}
                imageURL={imageURL}
                price={price}
                rating={rating}
                category={category}
              />
            )
          )}
        </motion.div>
        <CartOptionsSection />
      </Layout>
      <ScrollToTop />
    </motion.div>
  );
};

export default cart;
