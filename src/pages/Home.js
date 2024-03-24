import React from 'react'
import hero from '../assets/hero.png'
import verified from '../assets/verified.jpg'
import './Home.css'


const Home = () => {
  return (
    <>
    <section class=" dark:bg-gray-900 pt-8">
        <div class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div class="mr-auto place-self-center lg:col-span-7">
                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Building digital <br></br>products & brands.</h1>
                <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">This free and open-source landing page template was built using the utility classes from <a href="https://tailwindcss.com" class="hover:underline">Tailwind CSS</a> and based on the components from the <a href="https://flowbite.com/docs/getting-started/introduction/" class="hover:underline">Flowbite Library</a> and the <a href="https://flowbite.com/blocks/" class="hover:underline">Blocks System</a>.</p>
             
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={hero} alt="hero image"></img>
            </div>                
        </div>
    </section>

    <section class=" dark:bg-gray-900 px-5 flex flex-col sm:flex-row justify-center items-center gap-5 ">
    <article className=" overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-sm ">
  <img
    alt=""
    src={verified}
    className="h-56 w-full object-cover"
  />
   <div class="bg-white p-4 sm:p-6">

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>


  </div>

</article>

<article className=" overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-sm ">
  <img
    alt=""
    src={verified}
    className="h-56 w-full object-cover"
  />
   <div class="bg-white p-4 sm:p-6">

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
  </div>

</article>

<article className=" overflow-hidden rounded-lg shadow transition hover:shadow-lg max-w-sm ">
  <img
    alt=""
    src={verified}
    className="h-56 w-full object-cover"
  />
   <div class="bg-white p-4 sm:p-6">

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
      pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem,
      mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque
      dignissimos. Molestias explicabo corporis voluptatem?
    </p>
  </div>

</article>
    </section>

    <section >
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-yellow-300 sm:text-4xl">World Identity Fraud Statistics </h2>

      <p className="mt-4 text-white sm:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
        provident impedit esse recusandae facere libero harum sequi.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-yellow-500">Total Sales</dt>

          <dd className="text-4xl font-extrabold text-red-600 md:text-5xl">$4.8m</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
        </div>
      </dl>
    </div>
  </div>
</section>

    
</>
  )
}

export default Home