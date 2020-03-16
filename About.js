import React from 'react';


const About = () => {
    return(
        <div className="page">
            <section>
            <img src={process.env.PUBLIC_URL + "/chef.jpg"}
      alt="Myhome" width="300px"/>
                <h1>Chef Christian "Boy" Merza</h1>
                <h2>ABOUT US</h2>
                <p>The Homemade Bakery Shop honors the Kapampangan tradition of delicious cakes and breads in an energetic and convivial environment.</p>
                <p>Open from morning through early evening, Homemade Bakery Shop serves up a proprietary roast designed to evoke the gutsy character of Kapampangan espresso and to complement the array of breakfast breads and kapampangan inspired home made cakes.</p>
            </section>
        </div>

    )
}

export default About;