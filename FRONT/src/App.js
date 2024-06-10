import React from 'react';
import './App.css';
import Header_Component from './Components/page/Head';
import Body_Component from './Components/page/Produit';
import Right_Filter from './Components/page/Filter';

function App() {
  const products = [
    { id: 1, name: "Product 1", price: 10, stock: 5 },
    { id: 2, name: "Product 2", price: 20, stock: 8 },
    { id: 3, name: "Product 3", price: 30, stock: 12 },
    { id: 4, name: "Product 3", price: 30, stock: 12 },
    { id: 5, name: "Product 3", price: 30, stock: 12 },
    { id: 6, name: "Product 3", price: 30, stock: 12 },
  ];

  return (
    <div className="App">
      <Header_Component />
      <h1>Vehicule</h1>
      <div className='Left'>
        {products.map((product) => (
            <Body_Component key={product.id} product={product} />
        ))}
      </div>

      <div className='Right'>
            <Right_Filter />
      </div>
    </div>
  );
}

export default App;

