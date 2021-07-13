import React from "react";

import cls from "./style.module.css";

import { DropDownIcon } from "../../../constants/icons";

const data = [
  {
    category: "Laptops",
    show: false,
    subcategory: [
      "Acer",
      "Lenovo",
      "Dell",
      "Apple",
      "Hewlett Packard, HP",
      "Asus",
      "MSI",
      "Microsoft",
      "Samsung",
    ],
  },
  {
    category: "Smartphones",
    show: false,
    subcategory: [
      "Apple",
      "Asus",
      "Samsung",
      "Xiaomi",
      "Microsoft",
      "Nokia",
      "LG",
    ],
  },
  {
    category: "Accessories",
    show: false,
    subcategory: [
      "Headphones",
      "Adapters",
      "Keyboards & Mouse",
      "Wireless Routers",
      "3G Modems",
      "Memory, HDD, SSD, etc.",
    ],
  },
  {
    category: "Consumer Electronics",
  },
];

const Sidebar = (props) => {
  return (
    <div className={cls.main}>
      <div className={cls.header}>
        <h2>Categories</h2>
      </div>
      <div className={cls.list}>
        <div className={cls.categoryContainer}>
          <p className={cls.category}>Laptops</p>
          <DropDownIcon width={16} height={16} />
        </div>
        <div className={cls.categoryContainer}>
          <p className={cls.category}>Phones</p>
          <DropDownIcon width={16} height={16} />
        </div>
        <div className={cls.categoryContainer}>
          <p className={cls.category}>Accessories</p>
          <DropDownIcon width={16} height={16} />
        </div>
        <div className={cls.categoryContainer}>
          <p className={cls.category}>Consumer Electronics</p>
          <DropDownIcon width={16} height={16} />
        </div>
        <div className={cls.categoryContainer}>
          <p className={cls.category}>Gift like Products</p>
          <DropDownIcon width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
