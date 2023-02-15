import react from 'react';
import food2 from '../images/food2.jpeg';
import food3 from '../images/food3.jpeg';

function About({name,description}){
    return(
        <>
        <article className="testimonial-about-us">
        <section className="restaurant-title">
                <h1>Little Lemon</h1>
             <h2>Chicago</h2>
             <p className="restaurant-description">
             Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. 
             Despite the city's diversity, the two brothers recognized the lack of 
             Mediterranean cuisine in Chicago, and were inspired to bring the flavors 
             of their hometown in Italy to the people of Chicago. The two brothers 
             continue to oversee the Little Lemon restaurant, nearly thirty years later.
             </p>
            </section>
            <section className="about-us-image">
              <img  className="about-us-image1" src={food2} alt="about-us-image1"></img>
              <img  className="about-us-image2" src={food3} alt="about-us-image2"></img>
            </section>
        </article>
           
        </>
    );
}
export default About;

