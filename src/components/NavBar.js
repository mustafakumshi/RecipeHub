import React, { useEffect, useState } from 'react'
import { Form, Link, useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { GiKnifeFork } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom'
function NavBar() {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + input)
  };
  return (
    <div className='w-full h-12 sm:flex flex-row justify-center items-center my-4 '>
      <div className='w-1/2 flex justify-center items-center'>
        <Link to={"/"} className='flex'>
          <p className='text-white text-xl mx-3'><GiKnifeFork /></p><h1 className='text-white font-Lobster'>RecipeHub</h1>
        </Link>
      </div>
      <form className='w-1/2 ml-10 relative flex items-center' onSubmit={submitHandler}>
        <FaSearch className='text-black absolute left-3' />
        <input className='border-none outline-none px-10 w-96 py-2 rounded-md text-sm'
          onChange={(e) => setInput(e.target.value)} type="text" value={input} />
      </form>
    </div>
  )
}
export default NavBar
