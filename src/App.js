 import React from 'react'
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
 import Home from './Home'
 import About from './About'
 import Services from './Services'
 import Contact from './Contact'
 import Navbar from './Navbar'
import Footer from './Footer'
import {Switch , Route,Redirect} from 'react-router-dom'


 const App = () => {
   return (
     <>
     <Navbar/>
     <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/about" component={About} exact/>
     <Route path="/service" component={Services} exact/>
     <Route path="/contact" component={Contact} exact/>
     <Redirect to="/" />
     </Switch>
     <Footer/>
     </>
   )
 }
          
 export default App
 