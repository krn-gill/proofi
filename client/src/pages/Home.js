import React from 'react'
import hero from '../assets/hero.png'
import verified from '../assets/verified1.png'
import request_proof from '../assets/request_proof.png'
import my_proof from '../assets/mypoofi.png'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <section class="mt-20" id="home">
        <div class="grid max-w-screen-xl px-4 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Check Before, You Trust</h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Proofi is a simple and secure way to prove who you are online without sharing your personal details. When someone needs to check your identity, Proofi lets you respond safely. You get a request, log into a secure portal, and Proofi handles the rest, making sure only the necessary info is shared. With Proofi, your private information stays private, making online verification worry-free.
            </p>

          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={hero} alt="hero image"></img>
          </div>
        </div>
      </section>

      <section class="px-5 grid grid-cols-3 gap-4 place-items-center" id='features'>
        <Link to='/activity/request'
          className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs hover:scale-105 transition-transform duration-300 min-w-[300px] h-[420px] flex flex-col justify-between items-center" // Added min-w-[300px] and min-h-[400px] for minimum width and height
        >
          <img
            alt=""
            src={verified}
            className=" h-[355px] w-full object-cover"
          />

          <p className="w-full m-0 p-3 line-clamp-3 text-yellow-500 text-2xl font-bold text-center bg-white">
            Request Proof
          </p>


        </Link>


        <Link to='/activity/verified'
          className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs hover:scale-105 transition-transform duration-300 min-w-[300px] h-[420px] flex flex-col justify-between items-center" // Added min-w-[300px] and min-h-[400px] for minimum width and height
        >
          <img
            alt=""
            src={request_proof}
            className="h-[350px] w-full object-cover"
          />

          <p className="w-full m-0 p-3 line-clamp-3 text-yellow-500 text-2xl font-bold text-center bg-white">
            Fetch Verified Proofs
          </p>


        </Link>

        <Link to='/activity/myproof'
          className="overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-xs hover:scale-105 transition-transform duration-300 min-w-[300px] h-[420px] flex flex-col justify-between items-center" // Added min-w-[300px] and min-h-[400px] for minimum width and height
        >
          <img
            alt=""
            src={my_proof}
            className="h-[350px] w-full object-cover"
          />

          <p className="w-full m-0 p-3 line-clamp-3 text-yellow-500 text-2xl font-bold text-center bg-white">
            Share Your Verification
          </p>


        </Link>
      </section>

      <section >
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-yellow-300 sm:text-5xl">World Identity Fraud Statistics </h2>

            <p className="mt-4 text-white sm:text-xl ">
              Identity fraud involves the unauthorized use of another person's personal information to commit theft or fraud, often leading to financial loss and damage to the victim's credit and reputation.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-yellow-500">Monetory Losses Incured</dt>

                <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">$56 Billion</dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-yellow-500">Population Impacted</dt>

                <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">33%</dd>
              </div>

              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-yellow-500">Suffered Long Term Damage</dt>

                <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">1 in 5</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>


    </>
  )
}

export default Home