import React, { useState } from "react";
import { ProductPage } from "./ProductPage";

export const Home = () => {

  const [user,setUser]=useState('')
    return (
      <div className=" py-10 px-10 my-10">
        <ProductPage/>
    </div>
    );
};
