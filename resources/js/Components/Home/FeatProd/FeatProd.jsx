import React from 'react'
import { BsCart2 } from 'react-icons/bs'
import fp1 from '../../../../images/fp-1.png'

const FeatProd = () => {
  return (
    <header className="max-w-screen-xl px-4 pt-16 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-24">

        <div className="m-auto border w-60 shadow-black/10">
          <div className="h-72 position-relative bg-white/90 p-10">
            <div className="hidden px-3 pt-3 align-items-center position-absolute top-0 left-0">
              <div className="h-7 w-7 bg-white/90 bg-blue-700 relative mr-2">
                <i className="fa-solid fa-cart-shopping absolute top-1/2 left-1/2 translate-y-2/4" />
                <BsCart2/>
              </div>
              <i className="fa-regular fa-heart" />
              <i className="fa-solid fa-magnifying-glass" />
            </div>
            <div className="grid justify-center">
              <img src={fp1} className="card-img-top" alt="..." />
            </div>
            <a href="#" className="btn btn-primary">View Details</a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Cantilever chair</h5>
            <div className="point-three">
              <div className="point-item" />
              <div className="point-item" />
              <div className="point-item" />
            </div>
            <p className="card-code">Code - Y523201</p>
            <p className="card-price">$42.00</p>
          </div>
        </div>
      </header>
  );
};

export default FeatProd