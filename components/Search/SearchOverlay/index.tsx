import { connectHits } from "react-instantsearch-dom";
import { Box } from "@material-ui/core";
import Result from "./Result";
import useStyles from "./mui-styles";

const CustomHits = ({ hits }: any) => {
  console.log("hits >>>", hits);
  const classes = useStyles();
  return (
    <Box
      position="absolute"
      left="45%"
      top="60px"
      borderRadius="8px"
      bgcolor="white"
      color="black"
      height="300px"
      width="62ch"
      className="search_cont"
    >
      {hits.map((hit: any) => (
        <Result key={hit.objectID} result={hit} />
      ))}
    </Box>
  );
};

const SearchOverlay = connectHits(CustomHits);

export default SearchOverlay;
