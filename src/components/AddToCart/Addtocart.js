import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';


const Addtocart = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState([])
    const {user} = useAuth();
    const submitOrder = {name:products.name, img: products.img, price: products.demand, email: user.email }
  


    useEffect(() => {
        fetch(`https://rocky-cove-17067.herokuapp.com/allproducts/${productId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

        })
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    const submit = e =>{
        axios.post('https://rocky-cove-17067.herokuapp.com/myorder', submitOrder)
        .then(res=> console.log(res))
         e.preventDefault();
         alert('Added To Order List')
      }



    return (
        <div>
            <h1>{products.name}</h1>

            <form>
                <button type="submit" onClick={submit} className="hi" >PLACE ORDER</button>
            </form>
        </div>
    );
}


export default Addtocart;