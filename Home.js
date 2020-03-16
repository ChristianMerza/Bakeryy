import React from 'react';


const Home = () => {
    return(
        
        <div className="page">
            <section>
            <img src={process.env.PUBLIC_URL + "/homee.jpg"}
      alt="Myhome" width="300px"/>
                <h1>Welcome to Homemade Bakery Shop</h1>
                <p>Chef Christian "Boy" Merza’s cake and breads are perfect for gifting and will make any occasion party sweeter. Place your order online, and pick-up at the Best Homemade Bakery Shop</p>
                <p>Address: 268 San antonio St. Sto. Domingo Angeles City Pampanga</p>
            </section>
            
        </div>   
        
    )
}

export default Home;

