import React from 'react';
import './RecommendedProducts.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RecommendedProducts = ({data}) => {

	const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

	const campaignProductRecommendations = data.campaign.productRecommendations.map(product => ({
    name: product.name,
    priceCurrency: product.price.currency,
    priceAmount: product.price.amount,
    imageUrl: product.imageUrl
  }));

  return (
    
    <div className='recommended-section'>
      <h1>Featured Products</h1>
      <hr />

      <div className="recommended-products">

        <Slider {...settings}>
				{campaignProductRecommendations.map((product, index) => (
          <div key={index} className="recommended-product">
						<div className="recommended-product-image">
                <img src={product.imageUrl} alt="" />
            </div>

						<div className="exp">
								<p className="recommended-product-title">{product.name}</p>
								<button> {product.priceCurrency} {parseFloat(product.priceAmount).toFixed(2)} </button>
							</div>

          </div>
        ))}
        </Slider>

      </div>
      
    </div>
  )
}

export default RecommendedProducts
