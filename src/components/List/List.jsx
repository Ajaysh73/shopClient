import React from 'react';
import './List.scss';
import Card from '../Card/Card';
const List = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Stylish Red Dress',
      isNew: true,
      oldPrice: 59.99,
      price: 49.99,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Classic Black Suit',
      isNew: true,
      oldPrice: 129.99,
      price: 99.99,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/983569/pexels-photo-983569.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Casual Jeans and T-Shirt',
      isNew: false,
      oldPrice: 39.99,
      price: 29.99,
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/904117/pexels-photo-904117.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/3363204/pexels-photo-3363204.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Elegant Evening Gown',
      isNew: false,
      oldPrice: 149.99,
      price: 119.99,
    },
  ];
  return (
    <div className='list'>
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
