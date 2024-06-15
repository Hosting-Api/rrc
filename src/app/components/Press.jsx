import React from 'react'

const Press = () => {
  return (
    <div>
       <div class="grid-cols-1 sm:grid md:grid-cols-3 ">
  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-blue-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/044.webp"
        alt="Skyscrapers" />
    </a>
    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
    {/* <div class="p-6">
      <p class="mb-4 text-base">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This content is a little bit
        longer.
      </p>
    </div> */}
   
  </div>

  <div
    class="mx-3 mt-6 flex flex-col rounded-lg bg-blue-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/043.webp"
        alt="Los Angeles Skyscrapers" />
    </a>
    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
    {/* <div class="p-6">
      <p class="mb-4 text-base">
        This card has supporting text below as a natural lead-in to
        additional content.
      </p>
    </div>*/}
   
  </div> 

  <div
    class="mx-3 mt-6 flex flex-col  rounded-lg bg-blue-400 text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white sm:shrink-0 sm:grow sm:basis-0">
    <a href="#">
      <img
        class="rounded-t-lg"
        src="https://tecdn.b-cdn.net/img/new/standard/city/042.webp"
        alt="Palm Springs Road" />
    </a>

    <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
    {/* <div class="p-6">
      <p class="mb-4 text-base">
        This is a wider card with supporting text below as a natural
        lead-in to additional content. This card has even longer content
        than the first to show that equal height action.
      </p>
      <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            <button className='bg-orange-300 hover:bg-blue-500 justify-content text-white font-bold  py-2 px-4 rounded-lg '>
          View </button><br />
          </a>
    </div>
     */}
  </div>
</div>
    </div>
  )
}

export default Press