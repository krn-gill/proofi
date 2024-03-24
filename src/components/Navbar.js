import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { useSDK } from "@metamask/sdk-react";
import { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit'

const Navbar = () => {



  return (
    <>
    	  <header class="fixed-top w-full h-20 bg- ">
        <nav class=" border-gray-200 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" class="flex items-center">
                    <img src={logo} class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                </a>
                <div class="flex items-center lg:order-2">
                   
            {/* {!connected && (
                    
                <button className="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded" onClick={connect}>
                Connect Wallet
            </button>
            )}

{connected && (
                  <div className='flex justify-center items-center'>
                  <>
                  {account}
                      <p className='text-1xl text-yellow-300 bg-yellow-200' > {account && `Connected account: ${account}`}</p>
                      
                  </>
              </div>
            )} */}

            <ConnectButton/>
            
               
                
           
                 
                </div>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" >
				<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
    <li>
        <Link to="/#home" class="block py-2 pl-3 pr-4 text-white bg-yellow-300 rounded lg:bg-transparent lg:text-yellow-300 lg:p-0 dark:text-white" aria-current="page">Home</Link>
    </li>
    <li>
        <Link to="/#features" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Features</Link>
    </li>
    <li>
        <Link to="/#stats" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Stats</Link>
    </li>
  
    <li>
        <Link to="/#footer" class="block py-2 pl-3 pr-4 text-white hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-yellow-300 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contact Us</Link>
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
