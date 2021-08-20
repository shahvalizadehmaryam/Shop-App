import { useProduct, useProductAction } from "../../provider/productProvider";

import styles from "./Filter.module.css";

const Filter = () => {
  const products = useProduct();
  const dispatcher = useProductAction();
  const allFilterHandler = () => {
    dispatcher({ type: "AllFilterType", value: "All" });
  };
  const womenFilterHandler = () => {
    dispatcher({ type: "WomenFilterType", value: "women collection" });
  };
  const childrenFilterHandler = () => {
    dispatcher({ type: "ChildrenFilterType", value: "children collection" });
  };
  const menFilterHandler = () => {
    dispatcher({ type: "MenFilterType", value: "men collection" });
  };

  return (
    <div className={styles.filterContainer}>


      <button onClick={allFilterHandler}>All</button>
      <button onClick={womenFilterHandler}>Women Collection</button>
      <button onClick={childrenFilterHandler}>Children Collection</button>
      <button onClick={menFilterHandler}>Men Collection</button>
    </div>
  );
};

export default Filter;
