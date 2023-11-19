"use client"

import {Fragment} from "react";
import useFav from "@/store/fav";
import Image from "next/image";
import FavType from "@/types/fav";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

import "./FavCart.scss";
import useCart from "@/store/cart";


const FavouriteCard = () => {
  const { cart, removeFromCart } = useFav();
  const {addToCart} = useCart();

  let newCart: (FavType | null)[] = cart.map((product: FavType) => ({
    ...product,
  }));

  return (
    <Fragment>
   {cart?.length !== 0 ? <div className="cart__row">
      {newCart?.map((product) => (
        <div key={product?.id} className="cart__card">
          <div className="cart__image">
            <Image
              src={
                product?.image ||
                ""
              }
              alt={product?.title || "Uknown"}
              fill
              objectFit="contain"
            />
          </div>
          <div className="cart__content">
            <h3>Name: {product?.title || "product"}</h3>
            <p>Description: {product?.description || "Not available"}</p>
            <p>
              Price: {product?.price || "Not available"}UZS
            </p>
            <div className="add__remove__btn">
              <button className="remove__fav__btn add" onClick={() => addToCart(product?.id!,
                product?.image!,
                product?.title!,
                product?.description!,
                product?.price!)}>
                  <AddShoppingCartIcon/>
                  <p>Add to cart</p>
                  
              </button>
              <button className="remove__fav__btn remove" onClick={() => removeFromCart(product?.id)}>
                <DeleteSweepIcon/>
                <p>Delete</p>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div> : (
    <div className="nodata__found">
      <h1>
      <NotInterestedIcon/>
        No data found...
      </h1>
    </div>)}
    </Fragment>
  );
};

export default FavouriteCard;
