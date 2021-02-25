import React from 'react'
import { Card } from './Card';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

export const Cards = () => {

    const cards = [
        {
            id:1,
            title: 'Ejemplo 1',
            image: image1
        },
        {
            id:2,
            title: 'Ejemplo 2',
            image: image2
        },
        {
            id:3,
            title: 'Ejemplo 3',
            image: image3
        }
    ]

    return (
      <div className="container d-flex justify-content-center align-items-center h-100">
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4">
              <Card key={card.key} title={card.title} img={card.image} />
            </div>
          ))}
        </div>
      </div>
    );
}
