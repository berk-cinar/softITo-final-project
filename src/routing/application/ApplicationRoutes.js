import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MovieList from '../../components/MovieList'
import MovieDetails from '../../components/MovieDetails'


import { useParams } from 'react-router-dom'
import Favorites from '../../pages/Favorites'
import FavoritesDetails from '../../pages/FavoritesDetails'
import Login from '../../pages/Login';
import CartPage from '../../components/CartPage';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import HomePage from "../../pages/HomePage"

export const ApplicationRoutes = () => {

const {id} = useParams();

  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
                <Route path='/'  element={<HomePage/>}/>
                <Route  path='movielist' element={<MovieList/>}/>
                <Route path={"/movie/:id"} element={<MovieDetails/>}/>

                <Route path={"/favorites"} element={<Favorites/>}/>
                <Route path={"/favorites/:id"} element={<FavoritesDetails/>}/> 
                <Route index exact path={"/login"} element={<Login/>}/> 
                <Route path={"/cart"} element={<CartPage/>}/> 
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}