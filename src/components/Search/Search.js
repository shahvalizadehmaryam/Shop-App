import { useState } from "react";
import { useProductAction } from "../../provider/productProvider";
import styles from "./Search.module.css";
import { FaSearch } from "react-icons/fa";
const Search = ({ category }) => {
  const dispatcher = useProductAction();
  const [searchInputValue, setSearchInputValue] = useState("");
  const searchChangeHandler = (e) => {
    dispatcher({ type: "CATEGORY_FILTER", category: category });
    dispatcher({ type: "SEARCH", event: e });
    setSearchInputValue(e.target.value);
  };
  return (
    <div>
      <input
        className={styles.searchInput}
        type="text"
        onChange={searchChangeHandler}
        value={searchInputValue}
        placeholder="search..."
      />
    </div>
  );
};

export default Search;
