import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const {user} = useAuth();
   
    const [comment,setComment] =useState('');
    const comments ={comment:comment, name:user.email}
    const handleChange = e =>{
        
        const field= e.target.value;
        setComment(field);
      
    }
    const handleSubmit = e =>{
        axios.post('https://rocky-cove-17067.herokuapp.com/reviews', comments)
        .then(res=> console.log(res))
         e.preventDefault();
         alert( 'Posted Review Succesfully')
      }

      console.log(user);
    return (
        <div>
            <Sidebar></Sidebar>

            <form onSubmit={handleSubmit} className="w-50 mx-auto" >
            <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"></label>
                    <input type="name" 
                    name="name"
                    onChange={handleChange}
                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">Your Review Will Display In First Page</div>
                </div>
             
                
                <button type="submit" class="btn btn-primary" >Post</button>
            </form>
        </div>
    );
};

export default Review;