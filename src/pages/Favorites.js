import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

import axios from 'axios';

function Favorites() {

    const items = useSelector((state) =>state.allCart.items)

    const dispatch = useDispatch();  

  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearchBar] = useState('');
  
  const navigate=useNavigate();

  const goToSource=(id)=>{
        navigate("/favorites/"+id);
    }

    function filterMovies(searchTerm, movies) {
      return movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

  useEffect(() => {
    axios.get('/favorites.json')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setFiltered(filterMovies(search, movies));
    console.log(filtered)
  }, [search, movies]);




  return (
    <>
     <div className='ml-36 mr-36  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4  xl:grid-cols-4 gap-4 mr-6  md:mr-8 lg:mr-16 ml-6 ' >

{/* 
{movies.map((item) =>(

<div key={item.id} class=" bg-white p-10  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" src={item.image} alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{items.price}</p>
        <a onClick={() => dispatch(addToCart(item))} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Add to Cart
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

))  
} */}
</div>
<div  className=' static relative flex justify-content-center '>

<div className='rounded-lg absolute mt-6 left-0 w-[200px] h-[100vh] '> 
<label class=" pl-4 relative block">
<span class="sr-only">Search</span>
<span class="absolute inset-y-0 left-0 flex items-center pl-2">
<svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
</span>
<div className=' m-4'>

<h3 class="font-semibold text-gray-900 dark:text-white"> Search Movie </h3>

</div>
<hr></hr>
<input  
type="text"
value={search}
onChange={e => setSearchBar(e.target.value)}
class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..."  name="search"/>
</label>
<div className=' m-4'>
<h3 class="mb-4 font-semibold text-gray-900 dark:text-white">IMDB</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="vue-checkbox" class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">+9</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="react-checkbox" class="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300">+8</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="angular-checkbox" class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">+7</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="laravel-checkbox" class="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300">+6</label>
</div>
</li>
</ul>
<h3 class="mt-4 mb-4 font-semibold text-gray-900 dark:text-white">Type</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="vue-checkbox" class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Action</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="react-checkbox" class="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300">Comedy</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="angular-checkbox" class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">Horror</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="laravel-checkbox" class="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300">Biography</label>
</div>
</li>
</ul>
<h3 class="mt-4 mb-4 font-semibold text-gray-900 dark:text-white">Year</h3>
<ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="vue-checkbox" class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">2023</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="react-checkbox" class="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300">2022</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="angular-checkbox" class="w-full py-3 text-sm font-medium text-gray-900 dark:text-gray-300">2021</label>
</div>
</li>
<li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
<div class="flex items-center pl-3">
  <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
  <label for="laravel-checkbox" class="w-full py-3  text-sm font-medium text-gray-900 dark:text-gray-300">2020</label>
</div>
</li>
</ul>
</div>
</div>



<div className='mt-10 xl:pl-20 xl:pr-20 ml-60  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-4 mr-24 ml-24 ' >

{filtered
.map(movie => (
<div    key={movie.id}>
<div class="bg-red-100  bg-white border border-gray-200 rounded-lg shadow">

<img  onClick={() => goToSource(movie.id)}  class="rounded-t-lg" src={movie.image} alt="" />

<div class="p-5">
<a href="#">
  <h5 class="min-h-[6vh] mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5> <button className='bg-black object-none object-right-bottom'>

  </button>
</a>

{/*         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> 2021 so far, in reverse chronological order.</p> */}

<button  onClick={() => dispatch(addToCart(movie))}  key={movie.id}   class="object-none object-right-bottom inline-flex items-center px-2 mt-2 py-1 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  Add to Cart
  <svg aria-hidden="true" class="w-4 h-4 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>



</div>
</div>
  

</div>
))}

</div>
</div>
    </>
      
        
  );
}

export default Favorites;
