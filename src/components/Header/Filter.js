import { useProduct, useProductAction } from "../../provider/productProvider";
import styles from "./Filter.module.css";
import Select from "react-select";
import { useState } from "react";
import Search from "../Search/Search";
const options = [
  { value: "", label: "All" },
  { value: "women collection", label: "women collection" },
  { value: "children collection", label: "children collection" },
  { value: "men collection", label: "men collection" },
];

const Filter = () => {
  const dispatcher = useProductAction();
  const [category, setCategory] = useState("");
  const filterCategoryHandler = (category) => {
    dispatcher({ type: "CATEGORY_FILTER", category: category });
    setCategory(category);
  };
  return (
    <div className={styles.filterContainer}>
      <Select
        placeholder="filter category"
        className={styles.categorySelect}
        value={category}
        onChange={filterCategoryHandler}
        options={options}
      />
      <Search category={category} />
    </div>
  );
};

export default Filter;
