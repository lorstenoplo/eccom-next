import { FC } from "react";
import { Box } from "@material-ui/core";
import Link from "next/link";
import useStyles from "./mui-styles";

type Props = {
  result: {
    title: string;
    imageURL: string;
    price: number;
    rating: number;
    category: string;
    slug: string;
    _id: string;
  };
};

const Result: FC<Props> = ({
  result: { title, imageURL, rating, price, _id, slug },
}) => {
  const classes = useStyles();
  return (
    <Link href="/slug/[id]" as={`/products/${_id}`}>
      <a>
        <Box
          alignItems="center"
          justifyContent="space-evenly"
          display="flex"
          my={1.5}
          py={0.5}
          className={classes.result}
        >
          <Box
            bgcolor="lightgray"
            flex="0.3"
            width="20%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            py={1}
            borderRadius={8}
          >
            <img src={imageURL} alt={title} className={classes.img} />
          </Box>
          <Box
            flex={0.5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className={classes.infoCont}
          >
            <h4 className={classes.title}>{title}</h4>
            <p style={{ margin: 0 }}>${price}</p>
          </Box>
          <p className={classes.rating}>Rating : {rating}</p>
        </Box>
      </a>
    </Link>
  );
};

export default Result;
