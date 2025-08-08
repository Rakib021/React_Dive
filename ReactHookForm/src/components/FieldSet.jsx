import React from 'react'

export default function FieldSet({label,children}) {
  return (
<fieldset className='border-2 border-gray-500 rounded-lg p-4 shadow-md'>
  {lable && <legend className='font bold text-md '>{label}</legend>}

  <div className='flex flex-col justify-between self-start'>{children}</div>
</fieldset>
  )
}
