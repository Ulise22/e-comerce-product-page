import {useState} from 'react';
import {ProductImages} from './ProductImages'

import './ImagesSection.css';

const ImagesSection = () => {
    const [actualImage, setActualImage] =useState(ProductImages.firstImage);

    return(
        <section className='productImages'>
            <section className='productImages__pc'>
                <div className='productImages__pc__container'>
                    <div className='pc__bigImage'>
                        <img src={actualImage} alt="sneakers" />
                    </div>

                    <div className='pc__littleImages'>
                        <div className='pc__littleImages__container'>
                            <img className='pc__littleImages__img' src={ProductImages.firstThumbnail} alt="#" />
                            <div onClick={() => setActualImage(ProductImages.firstImage)}  className={actualImage == ProductImages.firstImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </div>
                        <div className='pc__littleImages__container'>
                           <img className='pc__littleImages__img' src={ProductImages.secondThumbnail} alt="#" />
                           <div onClick={() => setActualImage(ProductImages.secondImage)} className={actualImage == ProductImages.secondImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </div>
                        <div className='pc__littleImages__container'>
                           <img className='pc__littleImages__img' src={ProductImages.thirdThumbnail} alt="#" />
                           <div onClick={() => setActualImage(ProductImages.thirdImage)} className={actualImage == ProductImages.thirdImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </div>
                        <div className='pc__littleImages__container'>
                            <img className='pc__littleImages__img' src={ProductImages.fourthThumbnail} alt="#" />
                            <div onClick={() => setActualImage(ProductImages.fourthImage)} className={actualImage == ProductImages.fourthImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='productImages__mobile'>
            
            </section>
        </section>
    )
}

export default ImagesSection;