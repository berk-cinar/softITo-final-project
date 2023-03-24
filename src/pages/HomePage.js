

import { addToCart } from '../features/cartSlice';
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux';

function HomePage() {


  const [movies, setMovies] = useState([]);

  const [filtered, setFiltered] = useState([]);

  const [search, setSearchBar] = useState('');
  
  const navigate=useNavigate();

  const goToSource=(id)=>{
        navigate("/movie/"+id);
    }

  const goToOffice=(id)=>{
        navigate("/movie/9");
    }

    function filterMovies(searchTerm, movies) {
      return movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }


  useEffect(() => {
    axios.get('/movies.json')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setFiltered(filterMovies(search, movies));
    console.log(filtered)
  }, [search, movies]);

   const items = useSelector((state) =>state.allCart.items)

   const dispatch = useDispatch();

  return (
    <div>


<div class="relative">
  <img class="w-full h-[50vh]" src="theoffice.png" alt="theoffice"/>
  <button onClick={goToOffice} type="button" class=" absolute top-0 m-28 focus:outline-none text-blue bg-white hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900">Watch Now</button>
  </div>
    <div className=' w-full flex justify-center items-center bg-sky-100 p-20'>
      
<div className='mt-10 xl:pl-20 xl:pr-20  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-6 gap-4 mr-6  md:mr-8 lg:mr-16 ml-6 ' >

        {filtered
        .map(movie => (
          <div    key={movie.id}>
<div class="bg-red-100  bg-white border border-gray-200 rounded-lg shadow">
   
        <img  onClick={() => goToSource(movie.id)}  class="w-full rounded-t-lg h-[230px] object-cover" src={movie.image} alt="" />
    
    <div >
        <a href="#">
            <h5 class="text-center min-h-[6vh] mb-2 text-md  tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>

        </a>

{/*         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> 2021 so far, in reverse chronological order.</p> */}

{/*         <button  onClick={() => goToSource(movie.id)}   key={movie.id}   class="object-none object-right-bottom inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Watch now
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button> */}
        <div>
        </div>

<div className="text-center mb-2">
  <button onClick={() => dispatch(addToCart(movie))} key={movie.id}   class="mb-2 object-none object-right-bottom inline-flex items-center px-2 mt-2 py-1 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    Add to Cart
  </button> <br></br>
<button class="inline-block bg-gray-100 hover:bg-gray-100 text-gray-800 text-xs  py-1 px-2 border border-gray-200 rounded">
      #{movie.genre1}
</button> 
<button class="ml-2 inline-block bg-gray-100 hover:bg-gray-100 text-gray-800 text-xs py-1 px-2 border border-gray-200 rounded">
      #{movie.genre2}
</button>
</div>
    </div>
</div>
          </div>
        ))}
      
    </div>

    </div>
    </div>
  );
}

export default HomePage;