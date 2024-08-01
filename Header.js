import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='border border-gray-200 shadow-xl '>
        <ul className='flex  m-4 justify-evenly'>
            <Link to="/firstpage">  <li className='border-2 border-gray-200 rounded-lg h-8 w-16 pl-2'>Page1</li></Link>
           <Link to="/secondpage"> <li className='border-2 border-gray-200 rounded-lg h-8 w-16 pl-2'>Page2</li></Link>
           <Link to="/thirdpage"> <li className='border-2 border-gray-200 rounded-lg h-8 w-16 pl-2'>Page3</li></Link>

        </ul>
    </div>
  )
}

export default Header