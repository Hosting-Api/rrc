import React from 'react'

const CareerForm = () => {
  return (
      <div >
    <div className='block max-w-2xl p-6  bg-white border border-gray-200 rounded-lg shadow ">    '>

        <h1 className='text-center font-bold text-3xl text-orange-300'>Fill the Form</h1>
        <form>
            <input type="text" placeholder="Your Full Name" className="w-full border p-2 my-2" required />
            <input type='email' placeholder='Your Email' className='w-full border p-2 my-2'  required/>
            <input type='tel' placeholder='Your Phone' className='w-full border p-2 my-2'  required/>
            <input type='text' placeholder='Your Education' className='w-full border p-2 my-2'  required/>
            {/* <select className='w-full p-2 border my-2' required defaultValue={'DEFAULT'}> */}
            <select className='w-full p-2 border my-2' required >
                {/* <option value="DEFAULT" disabled>Choose Role</option> */}
                <option value=""selected  disabled>Choose Role</option>
                <option value='Clinical Psychologists'>Clinical Psychologists</option>
                <option value='Social workers'>Social Workers</option>
                <option value='Psychiatric Nurses'>Psychiatric Nurses</option>
                <option value='General Nurses'>General Nurses</option>
            </select>
            <input type='file' className='w-full p-2 border my-2' />
            <button className='bg-orange-300 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded w-full my-2'>
                Apply
            </button>

        </form>
        </div>
    </div>
  )
}

export default CareerForm