import { Metadata } from "next";

import ProductCard from "@/components/card/ProductCard";

import "./style.scss";

export const metadata: Metadata = {
  title: "Vodiy perfume | Products",
  description:
    "Vodiy perfume",
};


const AllProductsPage = async() => {
  return (
    <section className="all-products">
      <div className="container products__container">
        <ProductCard/>
      </div>
    </section>
  );
}

export default AllProductsPage;
