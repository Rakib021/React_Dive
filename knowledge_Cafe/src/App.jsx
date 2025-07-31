import React from 'react'
import Header from './components/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'


export default function App() {
  return (
    <>
    <Header />
  <div className='md:flex max-w-4xl mx-auto'>
    <Blogs/>
    <Bookmarks />
  </div>
    </>
  )
}
