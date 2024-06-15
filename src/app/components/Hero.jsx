import React from 'react'

const Hero = () => {
  return (
    <div>
<header className="bg-white pt-8">
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
        <div className="flex flex-col items-center w-full md:flex-row md:w-1/2">
           

            <div className="max-w-lg pt-14 md:mx-12 md:order-2">
                <h1 className="text-3xl font-semibold tracking-wide text-orange-300  md:text-4xl">Rivaa Rehabilitation Center </h1>
                <p className="mt-4 text-blue-500 text-lg ">
                {/* <a className="text-blue-800 font-bold">RRC </a> */}
                
                  One of the best neuro-psychological Rehabilitation and De-addiction centres in India.
                  <br /><br />
                <a className='text-blue-800 text-lg'>
                  Want to  leave your addiction just send inquiry by clicking button below
                </a>
                  
                
                </p>
                <div className="mt-6">
                <a href="/sendinquiry" className="text-sm font-semibold leading-6 text-gray-900">
            <button className='bg-blue-500 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded'>
          Send inquiry <span aria-hidden="true">&rarr;</span></button>
          </a>
                </div>
            </div>
        </div>

        <div className="flex items-center justify-center w-full h-96 md:w-1/2">
            {/* <img className="object-cover w-full h-full max-w-2xl rounded-md" src="https://content3.jdmagicbox.com/comp/surat/d9/0261px261.x261.240503165201.u2d9/catalogue/rivaa-vyasanmukti-and-rehab-center-dumas-surat-de-addiction-centres-ht1ld7uro6.jpg" alt="apple watch photo" /> */}
            <img className="object-cover w-full h-full max-w-2xl rounded-md" src="/gate.jpg" alt="apple watch photo" />
        </div>
    </div>
</header>
    </div>
  )
}

export default Hero