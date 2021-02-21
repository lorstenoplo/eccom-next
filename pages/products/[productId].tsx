import { NextPage } from "next";
import { Layout, LoadingScreen } from "../../components";
import styles from "../../styles/Product.module.css";
import { withUrqlClient, PartialNextContext } from "next-urql";
import { CreateUrqlClient } from "../../utils/createUrqlClient";
import { useProductQuery } from "../../src/generated/graphql";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { useStateValue } from "../../context/StateProvider";

const ProductPage: NextPage<{ productId: string }> = ({ productId }) => {
  const [{ data, fetching, error }] = useProductQuery({
    variables: {
      productId,
    },
  });

  const { dispatch, state } = useStateValue();

  if (fetching) {
    return <LoadingScreen />;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  let easing = [0.6, -0.05, 0.01, 0.99];

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
      transition: { duration: 1, ease: easing, delay: 1.5 },
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const addToBasket = () => {
    if (data?.product) {
      dispatch({
        type: "ADD_TO_BASKET",
        value: {
          id: data.product.id,
          title: data.product.title,
          imageURL: data.product.imageURL,
          rating: data.product.rating,
          price: data.product.price,
        },
      });
    }
  };

  return (
    <motion.div
      className={styles.page}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{data?.product?.title || "Loading..."}</title>
      </Head>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={styles.imageCont}
      >
        <motion.img
          src={data?.product?.imageURL}
          alt={data?.product?.title || "error"}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        />
      </motion.div>

      <div className={styles.InfoCont}>
        <motion.div className={styles.InfoContInner} variants={stagger}>
          <Link scroll={false} href="/">
            <a>
              <motion.div variants={fadeInUp}>Back to products</motion.div>
            </a>
          </Link>
          <motion.h1 variants={fadeInUp}>{data?.product?.title}</motion.h1>
          <motion.p style={{ width: "90%" }} variants={fadeInUp}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            suscipit quaerat quod, accusantium ipsa eum officiis quam, accusamus
            sapiente amet sequi, quos quas qui aliquid. Aperiam enim rem fugit
            odit.
          </motion.p>
          <motion.div className={styles.btnCont} variants={fadeInUp}>
            <Button
              onClick={addToBasket}
              disableElevation
              variant="contained"
              color="primary"
            >
              Add to Cart
            </Button>
            <Button disableElevation variant="contained" color="default">
              Subscribe
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

ProductPage.getInitialProps = ({ query }) => {
  return {
    productId: query.productId as string,
  };
};

export default withUrqlClient(CreateUrqlClient, { ssr: true })(ProductPage);
