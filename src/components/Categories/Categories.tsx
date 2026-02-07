"use client";
import React, { useState } from "react";
import styles from "./Categories.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId } from "@/redux/slices/filterSlice";

const items = [
  { name: "Все" },
  { name: "Мясные" },
  { name: "Вегетарианская" },
  { name: "Гриль" },
  { name: "Острые" },
  { name: "Закрытые" },
];

const Categories: React.FC = () => {
  const [select, setSelect] = useState<number>(null);
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch()

  return (
    <div className={styles.categories}>
      <ul>
        {items &&
          items.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                setSelect(index);
                dispatch(setCategoryId(index))
              }}
              className={select === index ? styles.active : ""}
            >
              {item.name}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Categories;
