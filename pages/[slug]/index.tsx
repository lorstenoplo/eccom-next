import { Box, Button } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useQuery } from "react-query";
import { Layout, Product } from "../../components";
import useStyles from "../../mui-styles/Home_Styles";
import { API_BASE_URL } from "../../utils/constants";
import ScrollToTop from "../../utils/ScrollToTop";
import { useEffect } from "react";

const newIndex: NextPage<{ slug: string; products: any }> = ({
  slug,
  products,
}) => {
  const classes = useStyles();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className={classes.container}
      initial="initial"
      animate="animate"
      exit={{ opacity: 0 }}
    >
      <Head>
        <title>Shop for {slug}</title>
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Layout className={classes.body}>
        <Box alignItems="center" position="relative" display="flex">
          <Link href="/">
            <Button href="/" className={classes.back}>
              Back
            </Button>
          </Link>
          <h1 className={classes.categoryTitle}>{slug}</h1>
        </Box>
        <motion.div variants={stagger}>
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
            {products?.map((p: any, i: number) => (
              <Link
                key={i}
                scroll={false}
                href="/[slug]/[id]"
                as={`/${slug}/${p._id}`}
              >
                <a className={classes.link}>
                  <Product
                    category={p.category}
                    imageURL={p.imageURL}
                    title={p.title}
                    id={p._id}
                    rating={p.rating}
                    price={p.price}
                  />
                </a>
              </Link>
            ))}
          </Box>
        </motion.div>
      </Layout>
      <ScrollToTop />
    </motion.div>
  );
};

export const getStaticPaths = () => {
  return {
    paths: [
      { params: { slug: "electronics" } },
      { params: { slug: "skincare" } },
      { params: { slug: "food" } },
      { params: { slug: "juices" } },
    ],
    fallback: false,
  };
};

const fetchProducts = async (slug: string) => {
  const res = await fetch(`${API_BASE_URL}/productsBySlug/${slug}`);

  return res;
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const data = await fetchProducts(slug).then((res) => res.json());

  return {
    props: {
      products: (data as any).products,
      slug,
    },
  };
};

export default newIndex;
