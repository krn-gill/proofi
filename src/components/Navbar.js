import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    	  <header class="fixed w-full ">
        <nav class=" border-gray-200 py-2.5 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" class="flex items-center">
                    <img src={logo} class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                </a>
                <div class="flex items-center lg:order-2">
                   
                    <a href="https://themesberg.com/product/tailwind-css/landing-page" class="transition duration-300 ease-in-out bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-sw px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-yellow-300 focus:outline-none dark:focus:ring-purple-800"><span id='anim'>Try Now!</span></a>
                 
                </div>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" >
				<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white bg-yellow-300 rounded lg:bg-transparent lg:text-yellow-300 lg:p-0 dark:text-white" aria-current="page">Home</a>
    </li>
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Company</a>
    </li>
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Marketplace</a>
    </li>
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Features</a>
    </li>
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Team</a>
    </li>
    <li>
        <a href="#" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact</a>
    </li>
</ul>

                </div>
            </div>
        </nav>
    </header>

  


</>
  );
}

export default Navbar;
