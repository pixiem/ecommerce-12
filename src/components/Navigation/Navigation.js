import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"
import useAuth from '../../Hooks/useAuth';


const Navigation = () => {
  const {user,logout,loginUser} = useAuth();
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
  <div class="container-fluid ">
  
  <div>
  <img width="80px" src="./pnghut_integrated-circuits-chips-central-processing-unit-clip-art-symbol-chip.png" alt="" />
    </div>
  </div>
  <div>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/shop">Shop</Link>
        </li>
        {
          user.email && <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>
        } 
      </ul>
      {
        user?.email  ?   <button className="logoutbtn"   onClick={logout} class="nav-link active" aria-current="page" >LOGOUT</button> : 
        <Link   onClick={loginUser} class="nav-link active" aria-current="page" to="/login">LOGIN</Link>

      }
    
  </div>
  </div>
</nav>
       
    );
};

export default Navigation;

