"use client";

import useCategories from "@/store/categories";
import Image from "next/image";
import React, { useEffect } from "react";

import "./style.scss";
import Link from "next/link";
import Loading from "../loading/Loading";

const CategoryRow = () => {
  const { data: categories, getData: getCategories, loading } = useCategories();

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
  <div className="category__row">
      {categories?.map((category) => (
        <div key={category?._id} className="category__card">
          <div className="category__img">
            <Image src={category?.image?.url || "https://res.cloudinary.com/ddegkqlmz/image/upload/v1643729853/test/uc7weucjpvk7toma5px3.jpg"} alt={category?.name} fill />
          </div>
          <div className="category__content">
            <h3>{category?.name}</h3>
            <Link href={`/allcategories/${category?._id}`}>See more</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryRow;
