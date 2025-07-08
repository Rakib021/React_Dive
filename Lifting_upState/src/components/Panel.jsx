export default function Panel({title,children,isActive,onShow}) {

  return (
    <div className='panel'>
      <h1>Welcome To The {title}</h1>
      <h4>{title}</h4>

     {
      isActive ?(<p>{children}</p>):(<button onClick={onShow}>click</button>)
     }
      
     
    </div>
  )
}
