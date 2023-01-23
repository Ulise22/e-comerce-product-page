import './CartModal.css';
import thumbnail from './../Images/image-product-1-thumbnail.jpg';
import iconDelete from './../Images/icon-delete.svg';

const CartModal = ({sneakersInCart, deleteItemsCart,visibleCart, handleCart}: any) => {
    if(!visibleCart) return null;

    

    const EmptyCart = () => {
        return(
            <div className='cartModal'>
                <div className='cartModal__container'>
                    <div className='cartModal__title'>
                        <header>
                            <h4>Cart</h4>
                        </header>
                    </div>

                    <div className='cartModal__product__container'>
                        <h5 className='cartModal__product__subTitle'>Your Cart Is Empty</h5>
                    </div>
                </div>
            </div>
        )
    }

    if(sneakersInCart == 0) {
        return (
            <><EmptyCart /></>            
        )
    }
    return(
        <div className='cartModal'>
            <div className='cartModal__container'>
                <div className='cartModal__title'>
                    <header>
                        <h4>Cart</h4>
                    </header>
                </div>

                <section className='cartModal__product__container'>
                    <div className='cartModal__product'>
                        <img className='cartModal__product__img' src={thumbnail} alt="shoes" />
                        <div className='cartModal__product__desc'>
                            <p>Fall Limited Edition Sneakers</p>
                            <p className='cartModal__prices'>$125.00 x {sneakersInCart} <b>${sneakersInCart * 125}</b></p>
                        </div>
                        <button onClick={deleteItemsCart} className='cartModal__product__btn'><img src={iconDelete} alt="delete" /></button>
                    </div>

                    <a onClick={handleCart} className='cartModal__btn' href='#'>Checkout</a>
                </section>
            </div>
        </div>
    )
}

export default CartModal;