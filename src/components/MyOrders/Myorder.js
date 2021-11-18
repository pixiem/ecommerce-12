import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import Sidebar from '../Sidebar/Sidebar';

const Myorder = () => {
    const {user} = useAuth();
 const [ myOrder, setMyorder] = useState([]);
    useEffect(()=>{
        fetch(`https://rocky-cove-17067.herokuapp.com/myallorder?email=${user.email}`)
        .then(res=>res.json())
        .then(data => setMyorder(data))
    },[])

    const handleDelete = (id) =>{
        console.log(id);

        const url = `https://rocky-cove-17067.herokuapp.com/deleteOrder/${id}`;
        fetch(url,{
            method:"DELETE",
            headers:{"content-type": "application/json"}
        })
        .then(res => res.json())
        .then(data =>{
            if(data.deletedCount){
                alert("Deleted")
                const remaining = myOrder.filter(order => order._id !== id);
                setMyorder(remaining);
            }
            
        })

    }
    return (
        <div>
            <Sidebar></Sidebar>
            {myOrder.map(order=> <div> <h4>{order.name}</h4> <button  onClick={()=> handleDelete(order._id)} >Remove</button> </div> )}
        </div>
    );
};

export default Myorder;