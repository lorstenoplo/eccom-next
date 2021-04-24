import { useStyles } from "../../Navbar/Navbar";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import { connectSearchBox } from "react-instantsearch-dom";

const SearchBar = (props: any) => {
  const classes = useStyles(props);
  const { currentRefinement, refine, setFocused } = props;

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon color="inherit" />
      </div>
      <InputBase
        placeholder="Search…"
        type="search"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </div>
  );
};

const CustomSearchBar = connectSearchBox(SearchBar);

export default CustomSearchBar as any;
