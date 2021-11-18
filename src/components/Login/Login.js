import React, { useState } from 'react';
import { Link,useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const [logindata,setLogindata] = useState({});
    const {loginUser} = useAuth();
    const location = useLocation();
    const history = useHistory();
    
    const handleChange = e =>{
        const field= e.target.name;
        const value = e.target.value;
        const newLogindata = {...logindata};
        newLogindata[field] = value;
        setLogindata(newLogindata);
    }
    const handleSubmit = e => {
        loginUser(logindata.email, logindata.password,location,history)
        
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="w-50 mx-auto" >
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" 
                    name="email"
                    onChange={handleChange}
                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" 
                    name="password"
                     onChange={handleChange}class="form-control" id="exampleInputPassword1" />
                </div>
                
                <button type="submit" class="btn btn-primary" >LOGIN</button>
            </form> <br/>
            <Link to="/register" > New User? Register Here  </Link>


        </div>
    );
};

export default Login;