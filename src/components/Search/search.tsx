"use client";

import { useSearch } from "@/providers/contextProvider";
import styles from "./search.module.scss";
import React from "react";

const Search: React.FC = () => {
  const { searchValue, setSearchValue } = useSearch();

  return (
    <input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      className={styles.root}
      placeholder="Поиск пиццы..."
    />
  );
};

export default Search;
