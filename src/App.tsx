import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import ImagesSection from './Components/ImagesSection/ImagesSection';

function App() {
  const [numOfSneakers, setNumOfSneakers] = useState(0);
  const [sneakersInCart, setSneakersInCart] = useState(0);

 const restSneakers = () => {
  if(numOfSneakers > 0) {
    setNumOfSneakers(numOfSneakers-1);
  }
 }

const sumSneakers = () => setNumOfSneakers(numOfSneakers+1);

const deleteItemsCart = () => {
  setSneakersInCart(0)
}

const addToCart = () => {
  if(numOfSneakers > 0) {
    setSneakersInCart(numOfSneakers);
    setNumOfSneakers(0);
  }
}

console.log(sneakersInCart)

  return (
    <div className="App">
      <Navbar deleteItemsCart={deleteItemsCart} sneakersInCart={sneakersInCart} />

      <div className='homepage'>
        <ImagesSection />
        <ProductInfo numOfSneakers={numOfSneakers} addToCart={addToCart} sumSneakers={sumSneakers} restSneakers={restSneakers} />
      </div>
    </div>
  );
}

export default App;
