import React, { useEffect, useState } from 'react';
import Landingproducts from '../LandingpageProducts/Landingproducts';

const Shop = () => {
    const [products,setAllProduct] = useState([]);
    
    useEffect(()=>{
        fetch('https://rocky-cove-17067.herokuapp.com/allproducts')
        .then(res=>res.json())
        .then(data =>setAllProduct(data))
    },[])
    return (
        <div>
         
            <div  className="row card-group card-group ">
      {
           products.map(products => <Landingproducts
           products={products}
           >

           </Landingproducts>)
       }
      </div>
        </div>
    );
};

export default Shop;