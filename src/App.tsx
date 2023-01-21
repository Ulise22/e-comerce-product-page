import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductInfo from './Components/ProductInfo/ProductInfo';
import ImagesSection from './Components/ImagesSection/ImagesSection';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className='homepage'>
        <ImagesSection />
        <ProductInfo />
      </div>
    </div>
  );
}

export default App;
