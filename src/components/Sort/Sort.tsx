'use client'

import Image from "next/image";
import vector from "../../../assets/image/vector.svg";

import styles from "./Sort.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";


type Idata = {
  name: string;
  type: string;
  id: number;
}

const data: Idata[] = [
  { name: "популярности", type: "popular", id: 1 },
  { name: "цене", type: "pice", id: 2 },
  { name: "алфавиту", type: "alphabet", id: 3 },
];

export default function Sort() {
  const sort = useSelector(state => state.filter.sort)
  const [visiblePopup, setVisiblePopup] = useState(false);
  const [select, setSelect] = useState(1);
  const sortRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!e.composedPath().includes(sortRef.current)) {
        setVisiblePopup(false);
      }
    }
    document.body.addEventListener("click", handleClickOutside);

    return () => document.body.removeEventListener("click", handleClickOutside)
  }, []);

  return (
    <div ref={sortRef} className={styles.sorted}>
      <div
        onClick={() => setVisiblePopup(!visiblePopup)}
        className={styles.sortedLabel}
      >
        <Image className={styles.vector} src={vector} alt="vector image" />
        <span className={styles.sortedText}>Сортировка по:</span>
        <span className={styles.sortedTitle}>{data[select - 1]?.name}</span>
      </div>
      {visiblePopup && (
        <div className={styles.sortedPopup}>
          <ul>
            {data.map((item) => (
              <li
                className={select === item.id ? styles.active : ""}
                onClick={() => {
                  setSelect(item.id);
                  setVisiblePopup(false);
                }}
                key={item.id}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
