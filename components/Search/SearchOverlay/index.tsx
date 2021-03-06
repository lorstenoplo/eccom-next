import { connectHits } from "react-instantsearch-dom";
import { Box, Typography } from "@material-ui/core";
import Result from "./Result";
import Image from "next/image";

const CustomHits = ({ hits }: any) => {
  return (
    <Box
      position="absolute"
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
      {hits.length === 0 && (
        <Box
          height="250px"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="h6">No matching results found!</Typography>
        </Box>
      )}
      <Box py={1} justifyContent="flex-end" width="100%" display="flex">
        <a href="https://algolia.com" target="_algolia">
          <Image
            src="/algolia.svg"
            priority={true}
            alt="Search by Algolia"
            width={130}
            height={18}
          />
        </a>
      </Box>
    </Box>
  );
};

const SearchOverlay = connectHits(CustomHits);

export default SearchOverlay;
