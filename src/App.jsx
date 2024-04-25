import {Routes, Route} from "react-router-dom"
import "./scss/style.scss"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Services from "./pages/services/Services"
import Careers from "./pages/careers/Careers"
import Blog from "./pages/blog/Blog"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NotFound from "./components/notFound/NotFound" 
import AnimCursor from "./components/animCursor/AnimCursor"
import Products from "./pages/products/Products"
import SingleRoute from "./pages/singleRoute/SingleRoute"
import ScrollToTop from "./components/scrollToTop/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop/>
      <AnimCursor/>
      <Header/>
      <Routes>
        <Route path="/" element={ <Home/> }/>
        <Route path="/aboutus" element={ <About/> }/>
        <Route path="/services" element={ <Services/> }/>
        <Route path="/careers" element={ <Careers/> }/>
        <Route path="/blog" element={ <Blog/> }/>
        <Route path="/products" element={ <Products/> }/>
        <Route path="/product/:id" element={ <SingleRoute/> }/> {/* Dynamic Route */}
        <Route path="*" element={ <NotFound/> }/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
