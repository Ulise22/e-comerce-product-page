import {useState} from 'react';
import {ProductImages} from './ProductImages'

import './ImagesSection.css';
import ProductModal from './ProductModal';

const ImagesSection = () => {
    const [actualImage, setActualImage] = useState(ProductImages.firstImage);
    const [openModal, setOpenModal] = useState(false);

    return(
        <section className='productImages'>
            <section className='productImages__pc'>
                <div className='productImages__pc__container'>
                    <div onClick={() => setOpenModal(true)} className='pc__bigImage'>
                        <img src={actualImage} alt="sneakers" />
                    </div>

                    <div className='pc__littleImages'>
                        <article className='pc__littleImages__container'>
                            <img className='pc__littleImages__img' src={ProductImages.firstThumbnail} alt="#" />
                            <div onClick={() => setActualImage(ProductImages.firstImage)}  className={actualImage == ProductImages.firstImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </article>
                        <article className='pc__littleImages__container'>
                           <img className='pc__littleImages__img' src={ProductImages.secondThumbnail} alt="#" />
                           <div onClick={() => setActualImage(ProductImages.secondImage)} className={actualImage == ProductImages.secondImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </article>
                        <article className='pc__littleImages__container'>
                           <img className='pc__littleImages__img' src={ProductImages.thirdThumbnail} alt="#" />
                           <div onClick={() => setActualImage(ProductImages.thirdImage)} className={actualImage == ProductImages.thirdImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </article>
                        <article className='pc__littleImages__container'>
                            <img className='pc__littleImages__img' src={ProductImages.fourthThumbnail} alt="#" />
                            <div onClick={() => setActualImage(ProductImages.fourthImage)} className={actualImage == ProductImages.fourthImage ? 'littleImage__active' : 'littleImage__hover'}></div>
                        </article>
                    </div>
                </div>

                <ProductModal openModal={openModal} closeModal={() => setOpenModal(false)} />
            </section>

            <section className='productImages__mobile'>
            
            </section>
        </section>
    )
}

export default ImagesSection;