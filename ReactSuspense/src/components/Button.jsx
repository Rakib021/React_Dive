import { scale } from 'motion'
import React from 'react'
import {motion} from 'framer-motion'

export default function Button() {
  return (
    <div>
      <motion.button
      className = 'bg-black text-white p-1 border m-4 rounded-md'

      whileTap  ={{scale : 0.5}}
      whileHover ={{
        scale :1.8
      }}
      
      >
        Tap Me
      </motion.button>
      <motion.button
      className = 'bg-blue-500 text-white p-1 border m-4 rounded-md'

      whileTap  ={{scale : 0.5}}
      whileHover ={{
        scale :1.8,
        transition : {yoyo :Infinity}
      }}
      
      >
        Tap Me
      </motion.button>
    </div>
  )
}
