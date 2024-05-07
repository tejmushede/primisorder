import React from 'react'
import './OrderDetails.css';

const OrderDetails = ({data}) => {

  const { customer, orderSubtotal, deliveryCharge, total, dateOrdered } = data.order;

  const orderConfirmedEvent = data.templateText.events['order-confirmed'];

  const { title, body, statusText } = orderConfirmedEvent;

  const smallLogoUrl = data.variant.marketing.retailerSpecifics.smallLogoUrl;

  const changeDateFormat = () => {
    let date = new Date(dateOrdered)

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let day = date.getUTCDate()
    let monthIndex = date.getUTCMonth()
    let year = date.getUTCFullYear()

    let formattedDate = day + " " + months[monthIndex] + " " + year

    return formattedDate
  }

  return (
    <div className='order-details'>

      <div className="order-status">

        <div className="order-message">
          
          <div className="upper">

            <div className="left">
              <h2>{statusText}!</h2>
              <p>Hi {customer.firstName} {customer.secondName}</p>
            </div>

            <div className="right">
              <img src={smallLogoUrl} alt="" />
            </div>

          </div>

          <div className="lower">
            <p>{title}</p>
            <p>{body}</p>

          </div>

        </div>

        {data.order.products.map((product, index) => (
            <div key={index} className="order-list">
          
            <div className="order-image">
              <img src={product.imageUrl} alt="" />
            </div>
  
            <div className="order-components">
              <div className="order-name-qp">
                <p className='order-name'>{product.name}</p>
                <div className="order-quantity-price">
                  <p>Quantity: {product.quantity}</p>
                  <p className='unit-price'>{product.price.amount}</p>
                </div>
              </div>
  
              <div className="order-total">
                <hr />
                <p>{product.price.currency} {product.total.amount}</p>
              </div>

            </div>
  
            <div className="order-total-dsk">
                <p>{product.price.currency} {parseFloat(product.total.amount).toFixed(2)}</p>
            </div>
  
            </div>
          ))}

      </div>

      <div className="order-summary">
        <h1>Order Summary...</h1>

        <div className="subtotal">
          <p className='subtotal-title'>Subtotal</p>
          <div className="subtotal-price">
            <p>{orderSubtotal.currency}</p>
            <p>{parseFloat(orderSubtotal.amount).toFixed(2)}</p>
          </div>
          
        </div>

        <div className="shipping">
          <p className='shipping-title'>Shipping</p>
          <div className="shipping-price">
            <p>{deliveryCharge.currency}</p>
            <p>{parseFloat(deliveryCharge.amount).toFixed(2)}</p>
          </div>
        </div>

        <div className="total">
          <p className='total-title'>Total</p>
          <div className="total-hr">
            <hr />
            <p className='total-price'>{total.currency} {parseFloat(total.amount).toFixed(2)}</p>
          </div>
        </div>

        <div className="delivery">
          <p className='delivery-title'>Order Date:</p>
          <p className='delivery-date'>{changeDateFormat()}</p>
        </div>

        <button>Schedule Delivery</button>

      </div>
      
    </div>
  )
}

export default OrderDetails
