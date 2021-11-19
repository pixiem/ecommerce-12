import React, { useEffect, useState } from 'react';
import "./Home.css"
import Header from '../Header/Header';
import Landingproducts from '../LandingpageProducts/Landingproducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
 const [products, setProducts ] = useState([]);
 const [reviews, setReviews ] = useState([]);
 useEffect(()=>{
     fetch('https://rocky-cove-17067.herokuapp.com/products')
     .then(res=>res.json())
     .then(data =>setProducts(data))
 },[])
  const sixproducts = products.slice(0,6);

  useEffect(()=>{
    fetch('https://rocky-cove-17067.herokuapp.com/reviews')
    .then(res=>res.json())
    .then(data =>setReviews(data))
},[])

    return (
        <div>
        <Header></Header>

        <h1 className="trending">Trending Products</h1>
      <div  className="row landing card-group card-group ">
      {
           sixproducts.map(products => <Landingproducts
           products={products}
           >

           </Landingproducts>)
       }
       </div>
     <h1>Happy Clients Says</h1>
       <div className="comment">{
           reviews.map(review => <Reviews
            reviews={review}
           ></Reviews>)
       }</div>
       <section className="row">
           <h1>About Us</h1>
       <div className=" row" >
     <div className="col-md-6 col-sm-12">
              <img width="400px" src="./128194410-flat-design-concept-of-our-team-about-us-community-management-.jpg" alt="" /> 
     </div>
     
     
     <div className="col-md-6 com-sm-12 div-one">
         
       <h1>WE ARE ALWAYS WITH YOU </h1>
       <h5>First time we selling processor in bangladesh. Our all products are genuine and we hope you will be satisfied</h5>
       <span>
       
       </span>
     </div>
       
       </div>


       </section>

      
      
          
        </div>
     
    );
};

export default Home;