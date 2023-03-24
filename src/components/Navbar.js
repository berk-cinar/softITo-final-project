import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../features/cartSlice'

export default function Navbar() {

  const dispatch = useDispatch();

  const [login, setLogin] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const {cart, totalQuantity} = useSelector((state) => state.allCart)

  useEffect(() => {
    dispatch(getCartTotal())

  }, [cart])

  return (
    <div>
        
<nav class=" bg-white border-gray-200  sm:px-4 py-2.5 rounded">
  <div class="  flex flex-wrap  justify-between mx-auto">

    <a className='inline-flex items-baseline'   href='/'>
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-6" alt="Logo" />
        <span class="ml-2 text-xl font-semibold  dark:text-white"> <p className='mt-2'>Moviez</p> </span>
    </a> 
    
    <button onClick={()=> {setMenuOpen(!menuOpen)}} data-collapse-toggle="navbar-default" type="button" class=" absolute  right-2 object-none   inline-flex p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
     
      <svg  class="w-6 h-6"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    {
          menuOpen 
          ?
          <div>
 <aside id="default-sidebar" class=" fixed top-0 left-0 z-40 w-64 h-screen transition-transform  md:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
             <ul class="space-y-2">
               {
                login
                ?
                <div>
                   <li onClick={()=> {setMenuOpen(false)}}>    
                   <Link to='/' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   <svg aria-hidden="true" class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                  <span class="flex-1  whitespace-nowrap">Home</span>
                   </Link>
                </li>

                <li onClick={()=> {setMenuOpen(false)}}>
                   <Link to='/cart' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                      <span class="flex-1  whitespace-nowrap">Cart ({totalQuantity})</span>
                   </Link>
                </li>
          
                <li  onClick={()=> {setMenuOpen(false)}}>
                   <Link to='/movielist' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                      <span class="flex-1  whitespace-nowrap">Products</span>
                   </Link>
                </li>
                <li  onClick={()=> {setMenuOpen(false)}}>
                   <Link onClick={()=> {setLogin(false)}} to='/login' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                      <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                      <span class="flex-1  whitespace-nowrap">Logout</span>
                   </Link>
                </li>
                </div>
                :
                <li  onClick={()=> {setMenuOpen(false)}}>
                <Link onClick={()=> {setLogin(false)}} to='/login' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                   <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                   <span class="flex-1  whitespace-nowrap">Login</span>
                </Link>
             </li>
               }
             </ul>
          </div>
       </aside>
          </div>

         
          
          :
          <div></div>
        }

        

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


        {
          login
          ?
          <>
          <Link to='/'>Homepage</Link><br/>
          <Link to='/movielist'>Products</Link><br/>
          <Link to='/cart'>Cart ({totalQuantity}) </Link><br/>
          <Link onClick={() => {setLogin(!login)}} to='/login'>Logout</Link> 
          </>
          :
          <></>
        }
      
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
