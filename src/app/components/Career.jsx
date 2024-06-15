"use client";
import React from 'react'
import Image from 'next/image'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from 'react-icons/fa';
import CareerForm from './CareerForm';
const Career = () => {
  return (
    <div className='py-28'>
    <h1 className='text-center font-bold text-3xl text-orange-300'>
        Work @ Rivaa Rehab Centre
    </h1>
    <center>
<div className='max-w-3xl   py-4 px-6'>
    {/* <div className='flex justify-center'> */}
        {/* <div className='w-1/2'> */}
            {/* <p className='text-center text-blue-500'> </p> */}
            <ul className='list-disc list-inside text-left text-xl text-blue-500'>
              <li>
              <strong className='text-blue-800'> Rivaa Rehab Centre </strong> (RRC) is a wonderful place for the people who 
              want to work dedicatedly for the social cause as well as monetary gains.
              </li>
              <li>
              Work environment is very good with majority staffs working for long period.
            We provide an environment in which each staff has independence of work as well as guidance 
            under experienced doctors & staff. 
              </li>
            </ul>  
            <br />
 
    <div className='block max-w-lg p-6  bg-white border border-gray-200 rounded-lg shadow   '>
        <h1 className='text-center font-bold text-3xl text-orange-300'>
        Current Openings
    </h1><br />
        
       
      
  <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
    <img
      className="rounded-t-lg"
      src="/ccs.jpg"
    
      alt="" />
      </div>    

  {/* <div class="p-6">
    <p class="text-base">
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </p>
  </div> */}
	


          {/* <br/><a href="/career-form" className="text-sm font-semibold leading-6 text-gray-900"> */}
          <br/><a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <button className='bg-orange-300 hover:bg-blue-500 justify-content text-white font-bold  py-2 px-4 rounded-lg '>
          Apply Here </button><br />
          </a>

    {/* </div> */}
    {/* <button className="text-blue-500 text-md  font-semibold hover:text-orange-300 cursor-pointer">
            <label><FaWhatsapp className="text-2xl cursor-pointer hover:text-yellow-600" /></label>
                <span>+917876524356</span>
        </button><br />
            <button className="text-blue-500 text-md pb-2 font-semibold hover:text-orange-300 cursor-pointer">
            <label><FaEnvelope className="text-lg cursor-pointer hover:text-yellow-600" /></label>
                <span>+917876524356</span>
        </button><br /> */}
    
    
           
        </div>
        </div>
        
    {/* </div> */}
    
           
       
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

      


      



      </center>
    </div>
  )
}

export default Career