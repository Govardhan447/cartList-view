import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        decrementCartItemQuantity,
        incrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props
      const {id, title, brand, quantity, price, imageUrl} = cartItemDetails

      console.log(quantity)

      const onremoveCartItem = () => {
        removeCartItem(id)
      }

      const decrementBtn = <BsDashSquare color="#52606D" size={12} />

      const incrementBtn = <BsPlusSquare color="#52606D" size={12} />

      const closeBtn = <AiFillCloseCircle color="#616E7C" size={20} />

      return (
        <li className="cart-item">
          <img className="cart-product-image" src={imageUrl} alt={title} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{title}</p>
              <p className="cart-product-brand">by {brand}</p>
            </div>
            <div className="cart-quantity-container">
              <button
                data-testid="minus"
                type="button"
                className="quantity-controller-button"
                onClick={decrementCartItemQuantity}
              >
                {decrementBtn}
              </button>
              <p className="cart-quantity">{quantity}</p>
              <button
                data-testid="plus"
                type="button"
                className="quantity-controller-button"
                onClick={incrementCartItemQuantity}
              >
                {incrementBtn}
              </button>
            </div>
            <div className="total-price-remove-container">
              <p className="cart-total-price">Rs {price * quantity}/-</p>
              <button
                data-testid="remove"
                className="remove-button"
                type="button"
                onClick={onremoveCartItem}
              >
                Remove
              </button>
            </div>
          </div>
          <button
            data-testid="remove"
            className="delete-button"
            type="button"
            onClick={onremoveCartItem}
          >
            {closeBtn}
          </button>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
