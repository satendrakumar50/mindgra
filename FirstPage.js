import React from 'react'
import RightBarComponent from './RightBarComponent'
import CommentFirstPage from './CommentFirstPage'


const FirstPage = () => {
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
        
        <img className='h-9 ml-6' alt='phoneImg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfjccz-rHGhryzkvJQfz2g5RPxCWxYMjfFjQ&s' />
        </div>
        
        </div>
        <div className='float-end '>
        <div className=' border border-gray-200 w-[34rem] h-[40rem]'>
        <RightBarComponent/>
        </div>
        </div>
        <div className='w-[59rem] mt-6 ml-6  '>
          
        <h1 className=' font-serif text-2xl mt-8 mb-8'>Community</h1>
        

          <div className='w-[59rem] flex flex-row  '>
        
          <p className=' bg: bg-slate-200 border border-blue-700 rounded-full w-9 h-7 text-center text-xs pt-1 text-blue-600 '>All</p>
          <p className='ml-8 border border-gray-500 text-gray-500 rounded-full w-44 text-center'>Preperation Strategy</p>
          <p className=' ml-8 border border-gray-500 text-gray-500 rounded-full w-44 text-center'>Interview Experience</p>
          <p className=' ml-80 bg: bg-blue-700 rounded-lg w-36 text-center text-white'>📝 Write</p>
           
          </div>
          <p className='border border-gray-100 ml4 mt-4 mb-3'></p>
        </div>
        
     <CommentFirstPage/>
        </div>

       

  )
}

export default FirstPage