import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { ApplicationLayout } from './ApplicationLayout'
import { NavigationTarget } from '../module/NavigationTarget'
import MovieList from '../../components/MovieList'
import { HomePage } from '../module/HomePage'
import MovieDetails from '../../components/MovieDetails'

import { useParams } from 'react-router-dom'

export const ApplicationRoutes = () => {

const {id} = useParams();

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<ApplicationLayout/>}>
                <Route  element={<HomePage/>}/>
          
                <Route index path='movielist' element={<MovieList/>}/>
             {/*    <Route path='moviedetails' element={<MovieDetails/>}/> */}
                <Route path={"/movie/:id"} element={<MovieDetails/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}