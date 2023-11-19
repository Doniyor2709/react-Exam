"use client"

import {Fragment} from "react";
import useFav from "@/store/fav";
import Image from "next/image";
import FavType from "@/types/fav";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

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
                  <ShoppingCartIcon/>
              </button>
              <button className="remove__fav__btn remove" onClick={() => removeFromCart(product?.id)}>
                <DeleteOutlineIcon/>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div> : (
    <div className="nodata__found">
      <h1>
        No data found...
      </h1>
    </div>)}
    </Fragment>
  );
};

export default FavouriteCard;
