import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SearchedMeal from './Pages/Food-searched.jsx';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/search' element={<SearchedMeal/>}/>
    </Routes>
  )
}

export default App
