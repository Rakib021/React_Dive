import React from 'react'

export default function Question({title,isActive,onShow,children}) {
  return (
    <div className='flex mt-4'>
      <h4>{title}</h4>
      {
        isActive ?(<p>{children}</p>):(<button className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md' onClick={onShow}>click</button>)
      }
      
      
    </div>
  )
}
