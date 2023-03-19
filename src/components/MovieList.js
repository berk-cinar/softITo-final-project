import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { FcLike } from 'react-icons/fc';
import axios from 'axios';
import Filter from './Filter';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState(movies)
  
  const navigate=useNavigate();

  const goToSource=(id)=>{
        navigate("/movie/"+id);
    }

  useEffect(() => {
    axios.get('/movies.json')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error));
  }, []);



  return (
        <div  className='relative flex justify-content-center '>
 

    <div className='p-40 grid   grid-cols-5 gap-4 mr-24 ml-24 ' >

    
        {movies
        .filter(item => {
          if (!value) return true
          if (item.title.includes(value) || item.includes(value)) {
            return true
          }
        })
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

        <button  onClick={() => goToSource(movie.id)}   key={movie.id}   class="object-none object-right-bottom inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>

          

    </div>
</div>
            

          </div>
        ))}
      
    </div>
        </div>
        
  );
}

export default MovieList;
