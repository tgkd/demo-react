/* eslint-disable */
import React from 'react'
import './index.styl'

function getCartItemTemplate (item, clickHandler) {
    return (
        <div className="cart-list__item">
            <span className="cart-list__item-name">{ item.name }</span>
            <span className="cart-list__item-count">{ item.count }</span>
            <span className="cart-list__item-remove" 
                onClick={ clickHandler.bind(this, item.id) }>
                rm -rf
            </span>
        </div>
    )
}

const CartList = (props) => {
    const { items, removeFromCart } = props
    return (
        <div className="cart-list">
            {
                items.map((cartItem, id) => {
                    const itemTemplate = getCartItemTemplate(cartItem, removeFromCart)
                    return (
                        <div key={cartItem.id || id}>
                            { itemTemplate }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartList
