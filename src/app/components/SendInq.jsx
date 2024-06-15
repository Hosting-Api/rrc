"use client";
import React from "react";
import { useState } from "react";
const SendInq = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/inquiry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ name, gender, email, phone, age, description }),
    });
    console.log(await response.json());
    if (response.ok) {
      const form = e.target;
      form.reset();
    } else {
      console.log("Storing Data failed !");
    }
  };

  return (
    <div className="pt-28">
      <center>
        <div className="block max-w-lg p-6  bg-white border border-gray-200 rounded-lg shadow ">
          <h1 className="text-center font-bold text-3xl text-orange-300">
            Send Inquiry
          </h1>
          <form onSubmit={submitHandler}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="Name"
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 my-2"
            />
            <select
              className="w-full p-2 border my-2"
              name="Gender"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="" selected disabled>
                Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <input
              type="email"
              name="Email"
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border p-2 my-2"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Your Phone"
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border p-2 my-2"
            />
            <input
              type="number"
              name="Age"
              placeholder="Your Age"
              onChange={(e) => setAge(e.target.value)}
              className="w-full border p-2 my-2"
            />
            <textarea
              placeholder="Short Description about Patient"
              name="Description"
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border p-2 my-2"
            />

            <button className="bg-orange-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full my-2">
            Send 
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default SendInq;
