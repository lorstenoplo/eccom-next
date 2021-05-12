import { NextPage } from "next";
import { useRouter } from "next/router";
import { fetchProduct } from "../../api-functions/queries/fetchProduct";
import useStyles from "../../mui-styles/Product_Styles";
import { useStateValue } from "../../context/StateProvider";
import { LoadingScreen } from "../../components";
import { motion } from "framer-motion";
import Head from "next/head";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {
  Button,
  Tooltip,
  Zoom,
  IconButton,
  Badge,
  Box,
} from "@material-ui/core";
import { Product } from "../../components/Order/types";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";

const pg: NextPage<{ id: string; product: Product }> = ({ id, product }) => {
  const { push, back, isFallback } = useRouter();
  const classes = useStyles();

  const { dispatch, state } = useStateValue();

  if (isFallback) {
    return <LoadingScreen />;
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
    if (product) {
      dispatch({
        type: "ADD_TO_BASKET",
        value: {
          id: product._id,
          title: product.title,
          imageURL: product.imageURL,
          rating: product.rating,
          price: product.price,
        },
      });
    }
  };

  return (
    <motion.div
      className={classes.page}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>{product?.title || "Loading..."}</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={classes.imageCont}
      >
        <div onClick={back} className={classes.back}>
          {"<"}
        </div>
        <motion.img
          src={product?.imageURL}
          alt={product?.title || "error"}
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: 200, opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className={classes.img}
        />
      </motion.div>

      <div className={classes.InfoCont}>
        <motion.div className={classes.InfoContInner} variants={stagger}>
          <motion.div className={classes.topCont} variants={fadeInUp}>
            <Button
              style={{
                textTransform: "none",
                transform: "translateX(-6px)",
              }}
              onClick={back}
            >
              Back to products
            </Button>

            <Tooltip TransitionComponent={Zoom} title="Your Cart">
              <IconButton
                aria-label="cart"
                aria-controls="menu-appbar"
                aria-haspopup="false"
                onClick={() => state.basket.length > 0 && push("/cart")}
              >
                <Badge badgeContent={state.basket.length} color="secondary">
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
          </motion.div>
          <motion.h1 variants={fadeInUp}>{product?.title}</motion.h1>
          <motion.p className={classes.productInfo} variants={fadeInUp}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            suscipit quaerat quod, accusantium ipsa eum officiis quam, accusamus
            sapiente amet sequi, quos quas qui aliquid. Aperiam enim rem fugit
            odit.
          </motion.p>
          <motion.div variants={fadeInUp} className={classes.moreInfo}>
            <motion.p style={{ fontSize: 16, fontWeight: "bold" }}>
              ${product.price}
            </motion.p>
            <div className={classes.ratingCont}>
              {Array(product.rating)
                .fill(null)
                .map((_, i) => (
                  <StarIcon key={i} className={classes.star} />
                ))}
              {Array(5 - product.rating)
                .fill(null)
                .map((_, i) => (
                  <StarBorderIcon key={i} className={classes.star} />
                ))}
            </div>
          </motion.div>
          <motion.div className={classes.btnCont} variants={fadeInUp}>
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

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params: { id } }: any) => {
  const data = await fetchProduct(id as string);

  return {
    props: {
      product: data,
      id,
    },
  };
};

export default pg;
