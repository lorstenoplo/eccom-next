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

const newIndex: NextPage<{ slug: string }> = ({ slug }) => {
  const classes = useStyles();

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  const { data, isError, isLoading, error } = useQuery(
    slug!,
    async () => {
      const res = await fetch(`${API_BASE_URL}/productsBySlug/${slug}`);
      return res.json();
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  if (isError) return <p>{error as string}</p>;

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
          <Link href="/new">
            <Button href="/new" className={classes.back}>
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
            {data?.products?.map((p: any, i: number) => (
              <Link
                scroll={false}
                href="/new/[slug]/[id]"
                as={`/new/${slug}/${p._id}`}
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

newIndex.getInitialProps = ({ query }) => {
  return {
    slug: query.slug as string,
  };
};

export default newIndex;
