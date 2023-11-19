import { Metadata } from "next";

import FavouriteCard from "@/components/card/FavouriteCard";

import "./style.scss";

export const metadata: Metadata = {
  title: "Vodiy perfume | Favourite",
  description:
    "Vodiy perfume",
};

const FavouritePage = () => {
  
  return <section>
    <div className="container">
      <h1 style={{paddingTop: "50px", marginBottom: "50px", fontSize: "40px"}}>Favourite</h1>
      <FavouriteCard/>
    </div>
  </section>;
};

export default FavouritePage;
