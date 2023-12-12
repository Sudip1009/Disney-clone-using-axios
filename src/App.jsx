
import './App.css'
import Footer from './Components/Footer'
import HeadCard from './Components/HeadCard'
import Hero from './Components/Hero'
import { Navber } from './Components/Navber'
import MovieByGenere from './Components/movieByGenere'

function App() {

  return (
    <>
    <div>
      <Navber/>
      <Hero/>
      <HeadCard/>
      <MovieByGenere/>
      <Footer/>
    </div>
    
    </>
  )
}

export default App
