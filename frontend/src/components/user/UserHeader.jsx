import { Heart, LogOut, ShoppingBag } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { Darkmode } from '../shared/Darkmode';

export const UserHeader = () => {
  return (
    <div className="navbar bg-base-100 px-20 py-4 flex w-100 items-center justify-between shadow-2xl">
  <Link to={"/"}>
          <div className='text-3xl'>shopyday</div>
        </Link>
  <div className="flex-none gap-5">
    <Link to={"product"}>
      products
      </Link>
   {/* <Darkmode/>*/} 
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <Link to={"likepage"}>
      <Heart/>
      </Link>
      <Link to={"cart"}>
      <ShoppingBag/>
      </Link>
      
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
  );
};