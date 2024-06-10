import React from 'react';

function Body_Component(props) {
  const { name, price, stock } = props.product;

  return (
    <div className="Principal"> 
      <div className='princip1'>
      </div>

      <div className='princip2'>
        <div className='princip21'></div>
        <div className='princip22'></div>
        <div className='princip23'></div>
      </div>
      
      <div className='princip3'>
        <br />Price: {price} Ariary
        <br />Stock: {stock} <br />
        <br /><input type="button" value="Add to cart" />
      </div>
    </div>
  );
}

export default Body_Component;
