import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import "./Slider.css"

const Sidebar = () => {
    const { user, logout } = useAuth();
    const [adminemail, setAdminemail] = useState(false);
    
    const [normalUser, setNormalUser] = useState(true);
    
    

    


    useEffect(() => {
        fetch(`https://rocky-cove-17067.herokuapp.com/adminpanel?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdminemail(data)
                setNormalUser(data);

            })
    }, [])
    console.log(adminemail);
    return (
        
        <div className="d-flex flex-column ">
          
           {adminemail &&  
           <Link className="linkbtn" to="/addproduct">Add A Product</Link>
           }
           {adminemail &&  
           <Link  className="linkbtn" to="/makeadmin">Make Admin</Link>
           }
           {adminemail &&  
           <Link className="linkbtn" to="dashboard">Manage Products</Link>
           }
           {adminemail &&  
           <Link  className="linkbtn" to="dashboard">Manage All Orders</Link>
           }
           
           {!normalUser && <Link className="linkbtn"  to="/">go to home</Link> }
           {!normalUser && <Link className="linkbtn"  to="/allmyorder">My Order</Link> }
          
           {!normalUser && <Link  className="linkbtn" to="/review"> REVIEW</Link> }
          
           {!normalUser && <Link  className="linkbtn" to="/pay">PAY</Link> }

          
            

            <button className="logoutbtn" onClick={logout}>LOGOUT</button>
           
            
            
            
        </div>
    );
};

export default Sidebar;


// 
// 