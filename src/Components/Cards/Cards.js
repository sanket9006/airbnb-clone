import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

// images
import img9 from '../../images/img-9.jpg'
import img8 from '../../images/img-8.jpg'
import img7 from '../../images/img-7.jpg'
import img6 from '../../images/img-6.jpg'
import img5 from '../../images/img-5.jpg'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={img9}
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/places'
            />
            <CardItem
              src={img8}
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/places'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={img7}
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/places'
            />
            <CardItem
              src={img6}
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/places'
            />
            <CardItem
              src={img5}
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
