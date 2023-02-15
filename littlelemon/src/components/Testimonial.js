import React from 'react';
import startestimonial from '../images/star.png';
function Testimonial({name,description}){
    return(
        <>
        <article className="testimonial-card">
            <img alt= "test-img" className="testimonial-img" src={startestimonial} />
                <h3 className="person-name">{name}</h3>
            <p className="person-testimonial">{description}</p>    
        </article>
        </>
    );
}
export default Testimonial;