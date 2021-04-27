import { connectHits } from "react-instantsearch-dom";
import { Box } from "@material-ui/core";
import Result from "./Result";
import Image from "next/image";

const CustomHits = ({ hits }: any) => {
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
      px={1}
    >
      {hits.map((hit: any) => (
        <Result key={hit.objectID} result={hit} />
      ))}
      <Image src="/algolia.svg" width={200} height={50} />
    </Box>
  );
};

const SearchOverlay = connectHits(CustomHits);

export default SearchOverlay;
