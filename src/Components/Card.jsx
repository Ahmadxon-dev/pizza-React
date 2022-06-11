import React from 'react'

const Card = ({ data, addToCart}) => {
  return (
    <>
        <div className="card">
          <div className="cardHeader">
            <img src={data.url} title={data.title} alt="productImage"  className='card-image'/>
          </div>
          <div className="cardBody p-2">
            <h3 className='cardTitle'>{data.title}</h3>
            <p className='cardDesc'>{data.desc}</p>
            <div className='d-flex jjustify-content-around'>
            <p className='cardPrice'><span>{data.price} sum</span></p>
            <button className='add-to-cart' onClick={() => addToCart(data)}>
              Выбрать
            </button>
            </div>
          </div>
        </div>
    </>
)
}

export default Card