import React from 'react';

function Card({name, price,description,imageSrc}){
    return(
        <>
        <article className="card-info">
            <img src={imageSrc} className="cardImg" alt="Greek Salad" />
            <section className="card-content">
                <h1>{name}</h1>
                <h1 className="alignRight">{price}</h1>
            </section > 
            <p className="cardDesc">{description}</p>
            <a className="special-button" href="/order">Order for Delivery</a>   
        </article>
        </>
    );
}
export default Card;