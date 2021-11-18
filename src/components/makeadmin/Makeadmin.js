import axios from 'axios';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Makeadmin = () => {
    const [des, setDes] = useState('');
   
    const desBlur = (e) => {
        setDes(e.target.value)
    }
    
    const newProduct = {
        email: des,
    

    }
    const handleOnSubmit = (e) => {

        axios.post('https://rocky-cove-17067.herokuapp.com/adminpanel', newProduct)
        .then(res=> console.log(res))
         e.preventDefault();
         alert('Added To Order List')
       
        e.preventDefault()

    }
    return (
        <div>
            <Sidebar></Sidebar>
            <form onSubmit={handleOnSubmit} className="w-50 m-auto">
               
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Enter Mail Address</label>
                    <textarea onBlur={desBlur} type="text" className="form-control" id="exampleInputEmail1" aria-label="With textarea" />
                </div>
                
                <input type="submit" value="Made as admin" />
            </form>
        </div>
    );
};

export default Makeadmin;