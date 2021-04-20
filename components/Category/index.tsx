import { FC } from "react";
import Link from "next/link";
import { Button, Box } from "@material-ui/core";
import useStyles from "./mui-styles";

type Props = {
  href: string;
  src: string;
  title: string;
};

const Category: FC<Props> = ({ href, src, title }) => {
  const classes = useStyles();
  return (
    <Box mb={2}>
      <Link href={href}>
        <Button href={href}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <img src={src} className={classes.img} />
            <h3 style={{ textTransform: "none" }}>{title}</h3>
          </Box>
        </Button>
      </Link>
    </Box>
  );
};

export default Category;
