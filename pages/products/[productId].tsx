import { Badge, Button, IconButton, Tooltip, Zoom } from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { fetchProduct } from "../../api-functions/queries/fetchProduct";
import { LoadingScreen } from "../../components";
import { useStateValue } from "../../context/StateProvider";
import useStyles from "../../mui-styles/Product_Styles";
import { NextPage } from "next";

const ProductPage: NextPage<{ productId: string }> = ({ productId }) => {
  const { isLoading, isError, data, error } = useQuery(
    ["product", productId],
    async () => {
      const data = await fetchProduct(productId as string);
      return data;
    },
    {
      retry: 1,
    }
  );

  const classes = useStyles();

  const { dispatch, state } = useStateValue();
  const router = useRouter();

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError) {
    return (
      <motion.p initial="initial" animate="animate" exit={{ opacity: 0 }}>
        {error as string}
      </motion.p>
    );
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
    if (data) {
      dispatch({
        type: "ADD_TO_BASKET",
        value: {
          id: data._id,
          title: data.title,
          imageURL: data.imageURL,
          rating: data.rating,
          price: data.price,
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
        <title>{data?.title || "Loading..."}</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>

      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className={classes.imageCont}
      >
        <motion.img
          src={data?.imageURL}
          alt={data?.title || "error"}
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
            <Link scroll={false} href="/">
              <Button
                style={{
                  textTransform: "none",
                  transform: "translateX(-6px)",
                }}
                href="/"
              >
                Back to products
              </Button>
            </Link>
            <Tooltip TransitionComponent={Zoom} title="Your Cart">
              <IconButton
                aria-label="cart"
                aria-controls="menu-appbar"
                aria-haspopup="false"
                onClick={() => state.basket.length > 0 && router.push("/cart")}
              >
                <Badge badgeContent={state.basket.length} color="secondary">
                  <ShoppingCartOutlinedIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
          </motion.div>
          <motion.h1 variants={fadeInUp}>{data?.title}</motion.h1>
          <motion.p className={classes.productInfo} variants={fadeInUp}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            suscipit quaerat quod, accusantium ipsa eum officiis quam, accusamus
            sapiente amet sequi, quos quas qui aliquid. Aperiam enim rem fugit
            odit.
          </motion.p>
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

ProductPage.getInitialProps = ({ query }) => {
  return {
    productId: query.productId as string,
  };
};

export default ProductPage;
