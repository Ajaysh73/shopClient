import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/2529368/pexels-photo-2529368.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Dresses
            </Link>
          </button>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/4241704/pexels-photo-4241704.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/2'>
              Shoes
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/1374128/pexels-photo-1374128.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Watches
            </Link>
          </button>
        </div>
      </div>
      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/2950650/pexels-photo-2950650.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Hats
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/4646880/pexels-photo-4646880.jpeg?auto=compress&cs=tinysrgb&w=600'
                alt=''
              />
              <button>
                <Link className='link' to='/products/1'>
                  Suits
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/3739003/pexels-photo-3739003.jpeg?auto=compress&cs=tinysrgb&w=600'
            alt=''
          />
          <button>
            <Link className='link' to='/products/1'>
              Bridal
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
