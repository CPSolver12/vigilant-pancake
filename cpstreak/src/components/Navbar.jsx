
import {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex justify-between items-center h-24 mx-auto px-4 text-white bg-black rounded-xl w-[98%] m-4'>
      {/* <Image src={zetlogo} className='h-10 -ml-5'/> */}
      <button className='bg-[#2075f0] rounded p-2'>CP Streak1</button>
      <ul className='hidden md:flex'>
        <li className='p-4'><Link to="/">Home</Link></li>
        <li className='p-4'><Link to="/About">About us</Link></li>
        <li className='p-4'><Link to="/Contact">Contact us</Link></li>
        <li className='p-4'>Log In</li>
        <li className='p-2'><button className='bg-[#2075f0] rounded p-2'>Sign Up</button></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} className='fixed right-10'/> : <AiOutlineMenu size={20} className='fixed left-10'  />  }
      </div>

      <div className={(nav) ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#110011] border-r-gray-900 ease-in-out duration-500 z-50 ' : 'fixed left-[-100%] z-50 '}>
        <ul className='pt-12 uppercase p-4'>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}><Link to="/">Home</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}><Link to="/About">About us</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}><Link to="/Contact">Contact us</Link></li>
          <li className='p-4 border-b border-gray-600' onClick={() => handleNav()}>Log In</li>
          <li className='p-2'><button className='bg-[#2075f0] rounded p-2' onClick={() => handleNav()}>Sign Up</button></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;