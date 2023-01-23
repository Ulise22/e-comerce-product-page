import {useState} from 'react';
import {ProductImages} from './ProductImages';
import { ArrayOfImages } from './ArrayOfImages';

import './ImagesSection.css';
import ProductModal from './ProductModal';

const ImagesSection = () => {
    const [actualImage, setActualImage] = useState(ProductImages.firstImage);
    const [mobileImage, setMobileImage] = useState(0)
    const [openModal, setOpenModal] = useState(false);

    const nextBc = () => {
        if(mobileImage !== 3) {
            setMobileImage(mobileImage+1)
        } else {
            setMobileImage(0);
        }
    }

    const previousBc = () => {
        if(mobileImage !== 0) {
            setMobileImage(mobileImage-1)
        } else {
            setMobileImage(3)
        }
    }

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
                <img className='mobile__bc' src={ArrayOfImages[mobileImage]} alt="sneakers" />

                <div className='mobileArrows__container'>
                    <div onClick={nextBc} className='mobileArrows leftArrow'>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </div>

                    <div onClick={previousBc} className='mobileArrows rightArrow'>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ImagesSection;