import React from 'react'
import './Banner.scss'
import categoryPage from '../images/category-page.png'
import productDetailPage from '../images/product-detail-page.png'
import cartSide from '../images/cart-side.png'
import homepageMain from '../images/homepage-main.png'
import homepageSide from '../images/homepage-side.png'
import productDetailSide from '../images/product-detail-side.png'

const Banner = () => {
  return (
    <section className='banner'>
      <h1 className='banner__title'>E-commerce Website Template (FREEBIE)</h1>

      <div className='banner__features'>
        <div className='banner__feature'>
          <div className='banner__icon'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path d='M2 2h16v16H2V2z' stroke='#000' strokeWidth='1.5' fill='none' />
            </svg>
          </div>
          <span>Homepage</span>
        </div>
        <div className='banner__feature'>
          <div className='banner__icon'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path d='M2 2h16v16H2V2z' stroke='#000' strokeWidth='1.5' fill='none' />
            </svg>
          </div>
          <span>Product Detail Page</span>
        </div>
        <div className='banner__feature'>
          <div className='banner__icon'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path d='M2 2h16v16H2V2z' stroke='#000' strokeWidth='1.5' fill='none' />
            </svg>
          </div>
          <span>Category Page</span>
        </div>
        <div className='banner__feature'>
          <div className='banner__icon'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path d='M2 2h16v16H2V2z' stroke='#000' strokeWidth='1.5' fill='none' />
            </svg>
          </div>
          <span>Cart</span>
        </div>
        <div className='banner__feature'>
          <div className='banner__icon'>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
              <path d='M2 2h16v16H2V2z' stroke='#000' strokeWidth='1.5' fill='none' />
            </svg>
          </div>
          <span>Mobile Responsive</span>
        </div>
      </div>

      <div className='banner__screenshots'>
        <div className='banner__screenshot banner__screenshot--left'>
          <img src={categoryPage} alt='Category Page Screenshot' />
        </div>
        <div className='banner__screenshot banner__screenshot--right'>
          <img src={productDetailPage} alt='Product Detail Page Screenshot' />
        </div>
        <div className='banner__screenshot banner__screenshot--center'>
          <img src={homepageMain} alt='Homepage Screenshot' />
        </div>
        <div className='banner__screenshot banner__screenshot--side-right'>
          <img src={homepageSide} alt='Homepage Mobile Screenshot' />
        </div>
        <div className='banner__screenshot banner__screenshot--side-far-right'>
          <img src={productDetailSide} alt='Product Detail Mobile Screenshot' />
        </div>
        <div className='banner__screenshot banner__screenshot--side-left'>
          <img src={cartSide} alt='Cart Mobile Screenshot' />
        </div>
      </div>
    </section>
  )
}

export default Banner
