import React, { useEffect, useState} from 'react'
import Card from './Card'

const CardList = ({products, addToCart}) => {

    const [delay, setDelay]  = useState(true)

    useEffect(() => {
        setDelay(true)
        setTimeout(() => {
            setDelay(false)
        }, 5000)
    }, [products])

  return (
    <>
        {
            delay
            ?
            <div className="loader">
                <img src='https://media0.giphy.com/media/3o7bu8sRnYpTOG1p8k/giphy.gif?cid=ecf05e47cmvu2ch39rg7f5r37td40k7af6diym4usfgfzebt&rid=giphy.gif&ct=g' alt='loader' />
            </div>
            :
            <div className="card-list">
                {
                    products.length === 0
                    ?
                    <p>no Products</p>
                    :
                    products.map((product) => {
                        return(
                            <Card
                            key={product.id}
                            data={product}
                            addToCart={addToCart}
                            />
                    )})

                }
            </div>
        }
    </>
  )
}

export default CardList