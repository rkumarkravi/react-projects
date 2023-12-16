import React from 'react'
import { MdOutlineSort } from "react-icons/md";
import SearchBar from './Searchbar';
import { Link } from 'react-router-dom';
import Button from '../Button';

export default function Navbar() {
  return (
    <nav className="p-4 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-row items-center">
          <MdOutlineSort className="text-white text-xl" />
          <div className="text-white text-xl font-bold m-5 ">
            <Link to="/" className="text-white">Receipe Book</Link>
          </div>
        </div>

        <div>
          <SearchBar />
        </div>
        <div>
          <Link to="/your-recipes" className="text-white">
            <Button text="Create Your Recipes"/>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
