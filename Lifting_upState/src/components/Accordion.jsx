import React, { useState } from 'react'
import Panel from './Panel'

export default function Accordion() {
const [activeIndex,setActiveIndex] = useState(false);

  return (
    <div>
      <Panel 
      title="Free Course"
      isActive={activeIndex===0}
      onShow ={() =>setActiveIndex(0)}
      
      >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae inventore magni praesentium doloremque perferendis quos, vero veritatis explicabo? Cumque repellendus quisquam ad cum officia magni error obcaecati, amet soluta consequuntur.</Panel>
      <br />
      <Panel
       title="paid course"
       isActive={activeIndex===1}
      onShow ={() =>setActiveIndex(1)}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt animi eius, velit, quasi nostrum veritatis dolorum quam, architecto quae suscipit pariatur consequuntur voluptates doloribus. Consectetur ducimus corrupti eligendi voluptatum velit.</Panel>
    </div>
  )
}
