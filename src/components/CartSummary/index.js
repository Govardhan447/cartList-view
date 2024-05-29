import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let totalQuatityPrice = 0

      cartList.map(item => {
        if (cartList.length !== 0) {
          totalQuatityPrice += item.quantity * item.price
        }
        return null
      })

      return (
        <div className="cart-summary-container">
          <h1 className="total">
            Order Total:
            <span className="total-price">Rs{totalQuatityPrice}/-</span>
          </h1>
          <p>{cartList.length} items in cart</p>
          <button className="checkout-btn" type="button">
            checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
