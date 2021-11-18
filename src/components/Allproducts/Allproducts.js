import React, { useEffect, useState } from 'react';
import Landingproducts from '../LandingpageProducts/Landingproducts';
import "./Allproducts.css"

const Allproducts = () => {
    const [products, setProducts ] = useState([]);
 useEffect(()=>{
     fetch('https://rocky-cove-17067.herokuapp.com/allproducts')
     .then(res=>res.json())
     .then(data =>setProducts(data))
 },[])
    return (
        <div  className="row card-group card-group ">
            <h1>explore</h1>
            {
               products.map(product=> 
               <Landingproducts
               products={product}
               ></Landingproducts> 
                )
            }
        </div>
    );
};

export default Allproducts;