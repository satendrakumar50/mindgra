import React from 'react'

const RightBarComponent = () => {
    let arr = ["Interview", "Strategy", "Economics", "Sociology", "Indian History","Strategy","Sociology","Polity", "Indian History", "Strategy", "Sociology", "Polity", "Indian History","Strategy","Sociology","Polity"]
  return (
    <div className=' content-center '>
        <div className='text-center m-8'>
        <div className='h-44 w-96 text-center border border-gray-200 content-center'>
            <p>Achieve Your Goals with Keep The Streak Alive</p>
            
            <h1 className='w-44 ml-24 mt-4 rounded-full bg: bg-orange-300'>Start Practicing</h1>
            
        </div>
        </div>
        
        <div className='m-8'>
        <h1 className='font-semibold mb-6'>Tags</h1>
        <input className='w-96 border border-gray-400' placeholder='🔍Search for tags '/>
        </div>
        <div className='flex flex-wrap text-center m-6 '>
        {arr.map((value,index)=>{
            return <p className='ml-2 mt-2 border border-gray-400 rounded-full w-36' key = {index}>{value}</p>
        })}
        </div>
    </div>
  )
}

export default RightBarComponent