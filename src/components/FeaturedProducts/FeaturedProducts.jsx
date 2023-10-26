import React from 'react';
import './featuredProducts.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  console.log(type);
  console.log(data.data);
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus minima dolore
          provident, quasi soluta inventore alias tempora dolorum amet, perspiciatis harum iste
          voluptate ut, molestias voluptatibus porro distinctio blanditiis. Hic impedit ducimus
          alias ea tenetur deserunt adipisci voluptas rerum, nesciunt quia architecto facilis
          distinctio culpa? Magni sequi alias eius error!
        </p>
      </div>

      <div className='bottom'>
        {error
          ? 'Something went wrong'
          : loading
          ? 'Loading...'
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
