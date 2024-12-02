import React from 'react'
import { Link } from 'react-router-dom';
import { Darkmode } from '../shared/Darkmode';

export const Header = () => {
  return (
    <div className="navbar bg-base-100 px-20 py-4 flex w-100 items-center justify-between shadow-2xl">
  <Link to={"/"}>
          <div className='text-3xl'>shopyday</div>
        </Link>
  <div className="flex-none gap-5">
  <Link to={"/product"}>
      products
      </Link>
   {/*  <Darkmode/>*/}
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <Link to={"/signup"}>
    <button class="btn btn-outline">join us</button>
    </Link>
  </div>
</div>
  );
};




