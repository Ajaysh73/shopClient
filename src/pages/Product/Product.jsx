// import React, { useState } from 'react';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import BalanceIcon from '@mui/icons-material/Balance';
// import './Product.scss';
// import { useParams } from 'react-router-dom';
// import useFetch from '../../hooks/useFetch';

// const Product = () => {
//   // const images = [
//   //   'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg?auto=compress&cs=tinysrgb&w=1600',
//   //   'https://images.pexels.com/photos/2955375/pexels-photo-2955375.jpeg?auto=compress&cs=tinysrgb&w=1600',
//   // ];
//   const id = useParams().id;

//   const { data, loading, error } = useFetch(`/products/${id}`);
//   const [selectedImg, setSelectedImg] = useState('img');
//   const [quantity, setQuantity] = useState(0);
//   console.log(data);
//   return (
//     <div className='product'>
//       <div className='left'>
//         <div className='images'>
//           <img
//             src={
//               import.meta.env.VITE_REACT_APP_UPLOAD_URL +
//               data?.attributes[selectedImg]?.img?.data?.attributes?.url
//             }
//             alt=''
//             onClick={(e) => setSelectedImg('img')}
//           />
//           <img
//             src={
//               import.meta.env.VITE_REACT_APP_UPLOAD_URL +
//               data?.attributes[selectedImg]?.img2?.data?.attributes?.url
//             }
//             alt=''
//             onClick={(e) => setSelectedImg('img2')}
//           />
//         </div>
//         <div className='mainImg'>
//           <img src={images[selectedImg]} alt='' />
//         </div>
//       </div>
//       <div className='right'>
//         <h1>Title</h1>
//         <span className='price'>$199</span>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ipsa voluptas vitae
//           nisi voluptatibus accusamus, doloribus, fugiat facere fuga eligendi ut repellendus quae
//           error, enim aliquid dolore laborum repudiandae quibusdam?
//         </p>
//         <div className='quantity'>
//           <button onClick={(e) => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}>-</button>
//           <span>{quantity}</span>
//           <button onClick={(e) => setQuantity((prev) => (prev >= 9 ? 9 : prev + 1))}>+</button>
//         </div>

//         <button className='add'>
//           <AddShoppingCartIcon /> ADD TO CART
//         </button>
//         <div className='links'>
//           <div className='item'>
//             <FavoriteBorderIcon /> ADD TO WISH LIST
//           </div>
//           <div className='item'>
//             <BalanceIcon /> ADD TO COMPARE
//           </div>
//         </div>
//         <div className='info'>
//           <span>Vendor: Polo</span>
//           <span>Product Type: T-Shirt</span>
//           <span>Tag: T-Shirt, Women, Top</span>
//         </div>
//         <hr />

//         <div className='info'>
//           <span>DESCRIPTION</span>
//           <hr />
//           <span>ADDITIONAL INFORMATION</span>
//           <hr />
//           <span>FAQ</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;

import React from 'react';
import { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState('img');
  const [quantity, setQuantity] = useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);
  console.log(data);
  return (
    <div className='product'>
      {loading ? (
        'loading'
      ) : (
        <>
          <div className='product'>
            <div className='left'>
              <div className='images'>
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.img?.data?.attributes?.url
                  }
                  alt=''
                  onClick={(e) => setSelectedImg('img')}
                />
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.img2?.data?.attributes?.url
                  }
                  alt=''
                  onClick={(e) => setSelectedImg('img2')}
                />
              </div>
              <div className='mainImg'>
                <img
                  src={
                    import.meta.env.VITE_REACT_APP_UPLOAD_URL +
                    data?.attributes?.[selectedImg]?.data?.attributes?.url
                  }
                  alt=''
                />
              </div>
            </div>
            <div className='right'>
              <h1>{data?.attributes?.title}</h1>
              <span className='price'>${data?.attributes?.price}</span>
              <p>{data?.attributes?.desc}</p>
              <div className='quantity'>
                <button onClick={(e) => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={(e) => setQuantity((prev) => (prev >= 9 ? 9 : prev + 1))}>
                  +
                </button>
              </div>
              <button className='add'>
                <AddShoppingCartIcon /> ADD TO CART
              </button>
              <div className='links'>
                <div className='item'>
                  <FavoriteBorderIcon /> ADD TO WISH LIST
                </div>
                <div className='item'>
                  <BalanceIcon /> ADD TO COMPARE
                </div>
              </div>
              <div className='info'>
                <span>Vendor: Polo</span>
                <span>Product Type: T-Shirt</span>
                <span>Tag: T-Shirt, Women, Top</span>
              </div>
              <hr />
              <div className='info'>
                <span>DESCRIPTION</span>
                <hr />
                <span>ADDITIONAL INFORMATION</span>
                <hr />
                <span>FAQ</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
