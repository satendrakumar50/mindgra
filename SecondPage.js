import React from 'react'
import SencondPageStudentStrategy from './SencondPageStudentStrategy'

const SecondPage = () => {
  return (
    <div className='mt-6'>
    <div className=' border border-gray-100 top-0  p-2 flex flex-wrap  justify-between   mt-6 ml-6 text-center '>
    <h1 className='text-2xl font-semibold '>Welcome Rahul!</h1>
    
    <div className='flex flex-wrap   '>

    <p className='bg-gradient-to-r from-blue-600 via-blue-800 to-orange-400 p-[1.5px] mr-8  w-16 h-8 rounded-full text-center  '>
      <div className='items-center justify-center flex h-full w-full  rounded-full text-center   bg: bg-white'>
        🔥 2
      </div>
      </p>
    <p className='mr-8 border border-blue-400 w-40 h-8 rounded-lg text-blue-400'>Explore Community</p>
    <p placeholder='' className=' text-white bg: bg-blue-700 border border-blue-400 rounded-l-lg w-44 text-start pl-4'> Polity</p>
    <button className='bg: bg-blue-700 border border-blue-400 border-l-gray-300 rounded-r-lg' >🔽</button>
    <p className='mr-4'>📞</p>
    </div>
    </div>
    <SencondPageStudentStrategy/>
    </div>


    
  )
}

export default SecondPage