import './cart-item.scss'

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>{quantity} * <span className='price-bold'>${price}</span></span>
            </div>
        </div>
    )
}

export default CartItem