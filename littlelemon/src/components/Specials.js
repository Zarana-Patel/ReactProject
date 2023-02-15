
import React from 'react';
import Card from './Card';
import Testimonial from './Testimonial';


const menu=[
    {
        name:"Greek salad",
        price: "$12.99",
        description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic ",
        getImageSrc: () => require("../images/greekSalad.jpg"),
    },
    {
        name:"Bruchetta",
        price: "$5.99",
        description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
        getImageSrc: () => require("../images/bruschetta.jpeg"),
    },
    {
        name:"Dessert",
        price: "$9.99",
        description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        getImageSrc: () => require("../images/lemonDessert.jpg"),
    }
];

const testimonial = [
    {
        name:"Micheal Caldwell" ,
        description:"This is the best Mediterranean food that I've ever had!"
    } ,
    { 
        name: "Alan Chen",
        description: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
    },
    {
        name:"John Rosenblum" ,
        description:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
    },
    {
        name:"Brian Dean" ,
        description:"I came to Little Lemon after a 5 hour flight from the East Coast.The food here tasted so delicious after the trip here."
    } ,
    {
        name:"Micheal Cald" ,
        description:"This is the best Mediterranean food that I've ever had!"
    } ,
    { 
        name: "Alan Chem",
        description: "My Shiba Inu, Mugi, really loved the cozy vibes and delicious food here."
    },
    {
        name:"John Rosenblun" ,
        description:"Great food, welcoming staff, cozy atmosphere. A great place to treat your kids to."
    },
    {
        name:"Brian Deal" ,
        description:"I came to Little Lemon after a 5 hour flight from the East Coast.The food here tasted so delicious after the trip here."
    }                             
];
function  Specials(){
    return(
        <>
        <section className="specials">
            <header className="highlights">
                <h1 className="today-special">Today's Specials</h1>
                <a className="special-button" href={require("../images/menuPage.webp")} target="_blank" rel="noreferrer">Menu</a>
            </header>
        </section>
        <section className="card-section">
            {menu.map((item)=>(
                 <Card key={item.name} name={item.name} price={item.price} description={item.description} imageSrc={item.getImageSrc()}/>
               ))}
        </section>
        <section className="testimonial-title">
                <article className="testimonial-title">
                    <h1>Testimonials</h1>
                </article>
        </section>
        <section className="testimonial-cards">
        {testimonial.map((item)=>(
                 <Testimonial key={item.name} name={item.name} description={item.description}/>
               ))}
        </section>
        </>
    );
}
export default Specials;