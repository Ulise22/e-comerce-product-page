import {useState} from 'react';
import { ProductImages } from './ProductImages'
import { ArrayOfImages } from './ArrayOfImages';
import './ProductModal.css';

const ProductModal = ({openModal, closeModal} : any) => {
    const [viewImage, setViewImage] = useState(0);

    if(!openModal) return null;

    const nextImage = () => {
        if (viewImage !== 3) {
            setViewImage(viewImage + 1)
        } else {
            setViewImage(0)
        }
    }

    const previousImage = () => {
        if(viewImage !== 0) {
            setViewImage(viewImage - 1)
        } else {
            setViewImage(3)
        }
    }

    return(
        <section onClick={closeModal} className='overlay'>
            <div onClick={(e) => {
                e.stopPropagation()
            }} className='productModal'>
                <div onClick={closeModal} className='productModal__exit'>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#fff" fill-rule="evenodd"/></svg>
                </div>

                <div className='productModal__bigImg'>
                    <div onClick={previousImage} className='productModal__bigImg__arrow leftArrow'>
                        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                    <div className='bigImg__container'>
                        <img className='productModal__bigImg__img' src={ArrayOfImages[viewImage]} alt="Sneakers" />
                    </div>
                    <div onClick={nextImage} className='productModal__bigImg__arrow rightArrow'>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                    </div>
                </div>

                <div className='productModal__thumbnail'>
                    <article className='productModal__thumbnail__container'>
                        <img className='productModal__thumbnail__img' src={ProductImages.firstThumbnail} alt="#" />
                        <div onClick={() => setViewImage(0)} className={viewImage == 0 ? 'productModal__thumbnailActive' : 'productModal__thumbnailHover'}></div>
                    </article>
                    <article className='productModal__thumbnail__container'>
                       <img className='productModal__thumbnail__img' src={ProductImages.secondThumbnail} alt="#" />
                       <div onClick={() => setViewImage(1)} className={viewImage == 1 ? 'productModal__thumbnailActive' : 'productModal__thumbnailHover'}></div>
                    </article>
                    <article className='productModal__thumbnail__container'>
                       <img className='productModal__thumbnail__img' src={ProductImages.thirdThumbnail} alt="#" />
                       <div onClick={() => setViewImage(2)} className={viewImage == 2 ? 'productModal__thumbnailActive' : 'productModal__thumbnailHover'}></div>
                    </article>
                    <article className='productModal__thumbnail__container'>
                        <img className='productModal__thumbnail__img' src={ProductImages.fourthThumbnail} alt="#" />
                        <div onClick={() => setViewImage(3)} className={viewImage == 3 ? 'productModal__thumbnailActive' : 'productModal__thumbnailHover'}></div>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default ProductModal;