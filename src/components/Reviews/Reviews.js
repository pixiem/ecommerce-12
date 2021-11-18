import React from 'react';
import "./Reviews.css"
const Reviews = (props) => {
    const {name,comment} = props.reviews;
    return (
        <div className="reviews">
            <span>{name}</span>
            <hr />
            <span>{comment}</span>
        </div>
    );
};

export default Reviews;