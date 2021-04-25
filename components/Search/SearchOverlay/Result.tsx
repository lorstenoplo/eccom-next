import { FC } from "react";
import { Box } from "@material-ui/core";
import Link from "next/link";

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
  result: { title, imageURL, rating, price, _id },
}) => {
  return (
    <Link href="/products/[productId]" as={`/products/${_id}`}>
      <a>
        <Box
          alignItems="center"
          justifyContent="space-evenly"
          display="flex"
          my={1.5}
          className="result"
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
            <img
              height="100px"
              style={{ objectFit: "contain" }}
              src={imageURL}
              alt={title}
            />
          </Box>
          <Box
            flex={0.5}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            className="sub"
          >
            <h4 style={{ margin: 0, marginBottom: 8 }}>{title}</h4>
            <p style={{ margin: 0 }}>${price}</p>
          </Box>
          <p className="sub">Rating: {rating}</p>
        </Box>
      </a>
    </Link>
  );
};

export default Result;
