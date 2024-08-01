import React from 'react'



const commentData = [
 {
  name: "varun Kumar",
  text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
  replies:[ {
    name: "Rahul Singh",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies:[]
  }, {
    name: "Imran Zaid",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies:[]
  }, {
    name: "varun Kumar",
    text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
    replies:[]
  },]
},
 {
  name: "varun Kumar",
  text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
  replies:[]
},
 {
  name: "varun Kumar",
  text: "Suspendisse a efficitur massa, in ultricies metus. Quisque vitae congue dui. Sed bibendum ipsum ut tortor alique",
  replies:[]
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

 </div>
 )

}

const CommentList = ({comments})=>{
   return comments?.map((comment,index)=><Comment key={index} data={comment}/>
      
   
   )
}


const CommentContainer = () => {
  return (
    <div className=''>
      <div className='flex mt-3 '>
      
      <p className=' ml-[48rem] h-10 w-28 mr-2  border border-blue-500 bg-gray-50 rounded-md mt-8 pt-[6px]'>✉️ Comment</p>
      
      
      </div>
      <p className=' font-bold mt-9'>Comments :</p>
      <CommentList comments={commentData}/>
      </div>
  )
}

export default CommentContainer