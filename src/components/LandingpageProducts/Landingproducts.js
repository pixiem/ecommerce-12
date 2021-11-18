import React from 'react';
import { Link } from 'react-router-dom';
import "./Landingproducts.css"

const Landingproducts = (props) => {
    const { _id,name,img,price,description } = props.products;
    return (
        <div className=" col-md-4 col-sm-6">


    <div className="card w-75 ms-5">

  <img width="200px" height="180px" src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{name}</h5>
    <p class="card-text">{description} </p>
    <h5 class="card-price">$ {price}</h5>
   <Link className="button" to={`/placeorder/${_id}`}>
  Go Somewere
   </Link>
    
  </div>


    </div>
         
        </div>
    );
};

export default Landingproducts;