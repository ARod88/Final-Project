import React from 'react';
import DarkVariantCarousel from './DarkVariantCarousel';

const Home = () => {
    return (
        <div className="homepage">
            <h1 className="title"> Tuft Gong Right Rugs</h1>
            <DarkVariantCarousel />

            <section className='checkout'>
                <p>Check out the Gallery for our products</p> 
                
                <p>Contact Us to place your order Today</p>
            </section>
        </div>
        



    );
}

export default Home;

