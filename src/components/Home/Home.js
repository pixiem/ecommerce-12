import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import "./Home.css"
import Header from '../Header/Header';
import Landingproducts from '../LandingpageProducts/Landingproducts';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Reviews/Reviews';
import Review from '../Review/Review';

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
      <div  className="row card-group card-group ">
      {
           sixproducts.map(products => <Landingproducts
           products={products}
           >

           </Landingproducts>)
       }
     
       <div className="comment">{
           reviews.map(review => <Reviews
            reviews={review}
           ></Reviews>)
       }</div>
      </div>
      
          
        </div>
     
    );
};

export default Home;