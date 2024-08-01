import React from 'react'


const commentData = [
    {
        name: "Rahul Kumar",
        text: "Nulla sed placerat leo, nec sodales nisi. Fusce et magna a leo ultrices mattis. Integer molestie odio et neque pellentesque, vitae auctor nulla dapibus. Etiam a ante velit. Ut lectus justo, hendrerit id sem id, tempor sollicitudin tellus. Proin eu eleifend risus. Morbi at sapien fringilla, vestibulum orci sit amet, efficitur dui.",
        
      },{
        name: "Rahul Kumar",
        text: "Nulla sed placerat leo, nec sodales nisi. Fusce et magna a leo ultrices mattis. Integer molestie odio et neque pellentesque, vitae auctor nulla dapibus. Etiam a ante velit. Ut lectus justo, hendrerit id sem id, tempor sollicitudin tellus. Proin eu eleifend risus. Morbi at sapien fringilla, vestibulum orci sit amet, efficitur dui.",
        
      }
]


const Comment = ({data})=>{
    const {name, text} = data;
    return(
    <div className=' mt-1 bg: bg-green-50 rounded-lg w-[59rem] hover:bg-white hover:shadow-lg' >
     
    
     <div className='flex '>
    <p className=' h-9 w-9 rounded-full bg: bg-orange-400 text-center text-white font-bold pt-1'>V</p>
    <div>
     
     <p className=' ml-2 font-semibold'>{name}</p>
     <p  className=' ml-2  '>12:15 Today</p>
     
     
     
     </div>
     
     </div>
     
     
     
     <p>{text}</p>
      <p>Satendra Kumar</p>
       <div className='flex'>
      <div className='flex bg: bg-gray-100  w-80 h-10 rounded-full mt-8'>
  <div className=''>
    <p className='flex  ml-4 mt-[5px]  h-8 w-8 border-2 border-blue-400 rounded-lg'>
      <img className='ml-[5px] mt-[5px] p-1 h-5 text-center w-5' alt='arrowDown' src='https://cdn4.iconfinder.com/data/icons/flat-design-basic-set-10-1/24/symbol-arrow-down-blue-direction-512.png'   />
    <div className='pl-5 flex  '>
    <p className='font-semibold '>100</p>
    <p className='ml-5   h-[31px] w-0  border border-gray-400'></p>

    </div>
    </p>
    </div>
    <div className=''>
      
    <p className='flex  ml-[88px] mt-[5px]  h-8 w-8 border-2 border-blue-400 rounded-lg'>
      <img className='ml-[5px] mt-[5px] p-1 h-5 text-center w-5' alt='arrowDown' src='https://cdn.iconscout.com/icon/premium/png-256-thumb/up-arrow-37-520802.png?f=webp'  />
    <div className='pl-4 flex  '>
    <p className='font-semibold'>13</p>
    <p className='ml-5   h-[31px] w-0  border border-gray-400'></p>
    
    <img className='ml-[5px] pb-2 mb-2 pl-3 p-1 h-10 text-center w-34' alt='SaveImg' src='https://cdn.icon-icons.com/icons2/1522/PNG/512/commentlinear_106230.png'  />
    <p className='font-semibold pl-2 pt-[0.5px]'>25</p>

    </div>
    
    </p>
    
   

    </div>
    
    </div>
    {/* Ending */}
    <div className='mt-9  ml-7 flex'>
        <div>
    <p className='text-orange-400'>New comment 5 min ago</p>
    </div>
    <div className='ml-28'>
     <button className='border border-orange-400 rounded-full h-9 w-32 bg-gradient-to-r from-orange-200 to-slate-50 text-orange-500'>Strategy</button>
     <button className='border border-orange-400 rounded-full h-9 w-32 ml-9 bg-gradient-to-r from-orange-200 to-slate-50 text-orange-500'>Prepartion</button>
     </div>
    </div>
    </div>
    </div>
    )
   
   }
   
   const CommentList = ({comments})=>{
      return comments?.map((comment,index)=><Comment key={index} data={comment}/>

      )
   }


const CommentFirstPage = () => {
  return (
    <div className=''>
    <div className='flex mt-3 '>    
    </div>
     
    <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentFirstPage