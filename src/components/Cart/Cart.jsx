import React from 'react';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import './Cart.scss';

const Cart = () => {
  const data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/1390600/pexels-photo-1390600.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Stylish Red Dress',
      isNew: true,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      oldPrice: 59.99,
      price: 49.99,
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/1857375/pexels-photo-1857375.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Classic Black Suit',
      isNew: true,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      oldPrice: 129.99,
      price: 99.99,
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/2737004/pexels-photo-2737004.jpeg?auto=compress&cs=tinysrgb&w=600',
      img2: 'https://images.pexels.com/photos/983569/pexels-photo-983569.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Casual Jeans and T-Shirt',
      isNew: false,
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      oldPrice: 39.99,
      price: 29.99,
    },
  ];
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data.map((item) => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc.substring(0, 100)}</p>
            <div className='price'>1 X ${item.price}</div>
          </div>
          <DeleteOutlinedIcon className='delete' />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset'>Reset the cart</span>
    </div>
  );
};

export default Cart;
