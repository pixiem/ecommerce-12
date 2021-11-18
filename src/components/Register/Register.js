import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Register = () => {
    const [loginData, setLoginData]= useState({});
    const {registerUser,isLoading} = useAuth();

  const handleSubmit = e =>{
      registerUser(loginData.email, loginData.password)

    e.preventDefault();

  }
  const handleChange = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData);
      
      

  }
    return (
        <div>
            <br />
            { !isLoading && <form onSubmit={handleSubmit} className="w-50 mx-auto" >   <div>
            <input type="name" 
                    name="name"
                    placeholder="Full Name"
                     onChange={handleChange}class="form-control" id="exampleInputName" />
            </div>
            <br />
                <div class="mb-3">
                 
                    <input type="email" 
                    placeholder="Email Address "
                    name="email"
                    onChange={handleChange}
                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
               
                </div>
                <div class="mb-3">
                  
                    <input type="password" 
                    placeholder="Enter Your Password Here"
                    name="password"
                     onChange={handleChange}class="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" class="btn btn-primary" >REGISTER</button>
            </form>}
            {
                isLoading && <span>Loading......</span>
            }
            <Link to="/login">Already Registered? Login Here</Link>
        </div>
    );
};

export default Register;