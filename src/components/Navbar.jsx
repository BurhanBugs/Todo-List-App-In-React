import React from 'react'

const Navbar = () => {
  return (
   <div className="flex w-full justify-between px-10 h-16 items-center bg-blue-300   ">
    <div className="flex gap-1 cursor-pointer items-center justify-center ">
        <img className='w-10' src="https://res-1.cdn.office.net/todo/1502198_2.110.2/icons/logo.png" alt="" />
        <span className='text-2xl cursor-pointer font-semibold'>ITask</span>
    </div>

    <div className="flex gap-6">
        <li className="cursor-pointer font-semibold text-xl list-none">Home</li>
        <li className="cursor-pointer font-semibold text-xl list-none">Your Tasks</li>
    </div>
   </div>
  )
}

export default Navbar
