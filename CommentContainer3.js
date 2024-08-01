import React from 'react'


const commentData = [
  {
    name: "Rahul Kumar",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies: [
      {
        name: "Varun Kumar",
        text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
        replies: [
          {
            name: "Imraan Zaid",
            text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
            replies: [{
              name: "Varun Kumar",
              text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
              replies: []
            },]
          },
        ]
      },
    ]
  },{
    name: "Rahul Kumar",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies: []
  },
  {
    name: "Rahul Kumar",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies: []
  }, {
    name: "Rahul Kumar",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies: []
  },


]

const Comment = ({data})=>{
   const {name, text} = data;
 return(
  

 <div className=' mt-1 rounded-lg ' >
  <div className='flex '>
 <p className=' h-9 w-9 rounded-full bg: bg-orange-400 text-center text-white font-bold pt-1'>V</p>
 <div>
  <p className=' ml-2 font-semibold'>{name}</p>
  <p  className=' ml-2  '>12:15 Today</p>
  </div>
  </div>
  <p>{text}</p>

  <div className='flex bg: bg-gray-100  w-52 h-10 rounded-full'>
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
    

    </div>
    </p>
    </div>
    <div className='ml-32 flex'>
      <div className='flex'>
        <img className='h-8 w-8 ' alt='Reply' src='https://cdn-icons-png.freepik.com/512/9548/9548758.png'   />
    <p className='text-gray-400 pl-2'>Reply</p>
    </div>
    <div className='flex'>
      <img className='h-8 w-9 pr-2 ml-14' alt='Hide' src='https://www.pngfind.com/pngs/m/65-657175_png-file-svg-transparent-comment-icons-png-png.png'    />
    <p className='pl-2  text-gray-400'>Hide</p>
    </div>
    </div>

  </div>

 </div>
 



 )
}

const CommentList = ({comments})=>{
   return comments?.map((comment, index)=>(
    <div className='bg: bg-white'>
   
   <Comment key={index} data={comment}/>
   <div className='w-[59rem] pl-5  ml-5 pt-1  border-2 border-r-0  border-b-0  border-t-0'>
    <CommentList  comments={comment.replies} /> 
   </div>
   
   </div>
   
   ))
}


const CommentContainer3 = () => {
  return (
    <div className='m-5 p-2'>
      <div className='flex mt-3 '>
      <p className=' font-bold '>Comments:</p>
      <p className=' ml-[40rem] h-8 w-28 mr-2  border border-blue-500 bg-gray-50 rounded-md '>✉️ Comment</p>
      
      
      </div>
      <CommentList comments={commentData}/>
      </div>
  )
}

export default CommentContainer3