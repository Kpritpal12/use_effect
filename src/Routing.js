import React from 'react'
import {
	BrowserRouter as Router,

    
	Route,
	Link,
    Routes
} from 'react-router-dom';

export default function Routing() {
  return (
      <Router>
    <div>
        <nav>
            <ul>
                <li>
                    <Link to ='/'>Home</Link>
                </li>
                <li>
                    <Link to ='/about'>About</Link>
                </li>
                <li>
                    <Link to ='/contact'>ContactUS</Link>
                </li>
            </ul>
        </nav>
    </div>

    <Routes>  
   <Route path='/about'>
        <About></About>
   </Route>
   <Route path='/contact'>
        <Users></Users>
   </Route>
   <Route path='/'>
        <Home></Home>
   </Route>
    </Routes>
    </Router>

  )
}

   function Home() {
    return <h2>Home</h2>;
}
  function About() {
    return <h2>About</h2>;
  }
  function Users() {
    return <h2>Users</h2>;
  }