"use client";
import React from "react";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({  email }),
    });
    console.log(await response.json());
    if (response.ok) {
      const form = e.target;
      form.reset();
    } else {
      console.log("Failed to add email!");
    }
  };


  return (
    <div>
        <div className="px-6 pt-6 w-full bg-gray-200">
    <form  onSubmit={submitHandler}>
      <div
        className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
        <div className="md:mb-6 md:ms-auto">
          <h6 className='text-blue-500'>
            <strong>Subscribe our Newsletter</strong>
          </h6>
        </div>

        <div className="relative md:mb-6" data-twe-input-wrapper-init>
          <input
            name="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="peer block min-h-[auto] w-full rounded border border-gray-400 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none "
            placeholder="Email address" 
            required/>
            
        </div>

        <div className="mb-6 md:me-auto">
          <button
            type="submit"
            className="inline-block rounded bg-orange-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-blue-500 "
            data-twe-ripple-init
            data-twe-ripple-color="light">
            Subscribe
          </button>
        </div>
      </div>
    </form>
  </div>
    <p id="newsltr"></p>
    </div>
  )
}

export default NewsLetter