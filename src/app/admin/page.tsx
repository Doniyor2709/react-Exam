"use client";
import PaidIcon from '@mui/icons-material/Paid';
import GroupIcon from '@mui/icons-material/Group';
import CategoryIcon from '@mui/icons-material/Category';
import GridOnIcon from '@mui/icons-material/GridOn';

import useUsers from "@/store/users";
import useCategories from "@/store/categories"
import useProducts from "@/store/products"
import {useEffect} from "react";

import "@/general-styles/dashboard.scss";
import "@/components/loading/Loading"

const DashboardPage = () => {
  const {getUsers, total, loading} = useUsers();
  const {data: categories, getData} = useCategories();
  const {total: products, getProducts} = useProducts();

  useEffect(() => {
    getUsers();
    getData();
    getProducts();
  }, [getUsers, getData, getProducts])

  return <div>
    <div className="dashboard__row">
      <div className="dashboard__card">
        <div className="card__top">
          <div className="card__title">
            <h3>Total users</h3>
            <p>{total}</p>
          </div>
          <div>
           
          </div>
        </div>
        <div className="card__bottom">
          <p><span>new users()</span></p>
        </div>
      </div>
      <div className="dashboard__card">
        <div className="card__top">
          <div className="card__title">
            <h3>Total categories</h3>
            <p>{categories?.length}</p>
          </div>
          <div >
          </div>
        </div>
        <div className="card__bottom">
          <p><span>new categories()</span></p>
        </div>
      </div>
    
    </div>
  </div>;
};

export default DashboardPage;
