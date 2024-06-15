"use client";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import Image from 'next/image'
import NewsLetter from "./NewsLetter";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
	return (
		<>
				<NewsLetter />
			<div className="bg-gray-200 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				
				<div className="p-5">
					<ul>
						<p className="text-orange-300 font-bold text-2xl pb-4">Follow us</p>
						<li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
              <a href="#">
            <label>
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
            </label>
            <span>Instagram</span>
              </a>
			</li>

			<li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
              <a href="#">
            <label>
              <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600" />
            </label>
            <span>Facebook</span>
              </a>
			</li>
			
						
			</ul>
				</div>
				
				<div className="p-5">
					<ul>
						<p className="text-orange-300 font-bold text-2xl pb-4">Useful links</p>
						{/* <li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<a href="#"> About us</a>
						</li>
						<li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<a href="#"> Contact us</a>
						</li> */}
						<li className="text-blue-500 text-lg text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<a href="/career"> Careers</a>
						</li>
						<li className="text-blue-500 text-lg text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<a href="/gallery">Gallery</a>
						</li>
						{/* <li className="text-blue-500 text-lg text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<a href="/press">Press & Media</a>
						</li> */}
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-orange-300 font-bold text-2xl pb-4">Reach us</p>
						{/* <li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<label><FaPhoneAlt className="text-lg cursor-pointer hover:text-yellow-600" /></label>
                <span>+917876524356</span>
						</li> */}
						<li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<label><FaPhoneAlt className="text-lg cursor-pointer hover:text-yellow-600" /></label>
                <span>+918160737499 | +917990162281 | 02612998358</span>
						</li>
						{/* <li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<label><FaPhoneAlt className="text-lg cursor-pointer hover:text-yellow-600" /></label>
                <span>02612998358</span>
						</li> */}
						<li className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
							<label><FaEnvelope className="text-lg cursor-pointer hover:text-yellow-600" /></label>
                <span>rivaarehab@gmail.com</span>
						</li>
						
					</ul>
				</div>

        
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-blue-800 font-semibold">
					© {year} All rights reserved. {" "}
					<span className="hover:text-blue-600 font-semibold cursor-pointer">
						{" "}
					</span>
				</h1>
			</div>
      <style jsx>{`
       label {
        float: left;
    }
    span {
        display: block;
        overflow: hidden;
        padding: 0px 4px 0px 6px;
    }
      
      `}
      </style>
		</>
	);
}

export default Footer;