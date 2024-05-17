import React from 'react'; 
import { lazy, Suspense } from 'react';
const Home = () => {
  const itmes = [
    {
      "name": "Golden Gate Bridge",
      "description": "A suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean.",
      "image": "https://via.placeholder.com/600/92c952"
    },
    {
      "name": "Eiffel Tower",
      "description": "A wrought-iron lattice tower on the Champ de Mars in Paris, France, named after the engineer Gustave Eiffel.",
      "image": "https://via.placeholder.com/600/771796"
    },
    {
      "name": "Great Wall of China",
      "description": "A series of fortifications made of stone, brick, tamped earth, wood, and other materials, built along the northern borders of China.",
      "image": "https://via.placeholder.com/600/24f355"
    },
    {
      "name": "Sydney Opera House",
      "description": "A multi-venue performing arts centre in Sydney, Australia, renowned for its unique architecture and setting.",
      "image": "https://via.placeholder.com/600/d32776"
    },
    {
      "name": "Mount Fuji",
      "description": "An active stratovolcano that last erupted in 1707–1708, it is the highest mountain in Japan and a symbol of the country.",
      "image": "https://via.placeholder.com/600/f66b97"
    },
    {
      "name": "Statue of Liberty",
      "description": "A colossal neoclassical sculpture on Liberty Island in New York Harbor, a gift from the people of France to the United States.",
      "image": "https://via.placeholder.com/600/56a8c2"
    },
    {
      "name": "Machu Picchu",
      "description": "An Incan citadel set high in the Andes Mountains in Peru, known for its archaeological significance and stunning views.",
      "image": "https://via.placeholder.com/600/b0f7cc"
    },
    {
      "name": "Taj Mahal",
      "description": "An ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra, commissioned by Mughal Emperor Shah Jahan.",
      "image": "https://via.placeholder.com/600/54176f"
    },
    {
      "name": "Christ the Redeemer",
      "description": "An iconic statue of Jesus Christ in Rio de Janeiro, Brazil, standing 30 meters tall, not including its 8-meter pedestal.",
      "image": "https://via.placeholder.com/600/51aa97"
    },
    {
      "name": "Colosseum",
      "description": "An ancient amphitheater in Rome, Italy, known for its architectural prowess and as a symbol of the Roman Empire.",
      "image": "https://via.placeholder.com/600/810b14"
    }
  ];

  return (
    <>
      <div className="container">
        <div className='row'> 
            {itmes.map((num , i) => (
              <div className='col-xl-4' key={i}>
                <div className='card'>
                  <img src={num.image} className='card-img-top' alt={num.name} />
                  <div className='card-body'>
                    <h5 className='card-title'>{num.name}</h5>
                    <p className='card-text'>{num.description}</p>
                  </div>
                </div>
              </div>
            ))} 
        </div>
      </div>
    </>
  );
}

export default Home;
