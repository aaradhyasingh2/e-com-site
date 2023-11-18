import React from 'react';
import '../css/product.css';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import phone from '../images/phone.jpg';
import camera from '../images/camera.jpg';
import Laptop from '../images/laptop.jpg';
import speaker from '../images/speaker.jpg';
import menjacket from '../images/camera.jpg';
import phone1 from '../images/phone.jpg';
import menjacket2 from '../images/camera.jpg';
import menjacket3 from '../images/camera.jpg';
import speaker1 from '../images/speaker.jpg';

const Product = () => {

    const dataBox = [
        {
            productName: 'laptop',
            imgUrl: Laptop,
            price: '$23.99'
        },
        {
            productName: 'camera',
            imgUrl: camera,
            price: '$12.58'
        },
        {
            productName: 'phone',
            imgUrl: phone,
            price: '$33.80'
        },
        {
            productName: 'speaker',
            imgUrl: speaker,
            price: '$12.54'
        },
        {
            productName: 'camera',
            imgUrl: menjacket,
            price: '$2333',
        },
        {
            productName: 'phone',
            imgUrl: phone1,
            price: '$2333',
        },
        {
            productName: 'camera',
            imgUrl: menjacket2,
            price: '$2333',
        },
        {
            productName: 'speaker',
            imgUrl: speaker1,
            price: '$2333',
        }
    ]

    return (
        <>
            <div className="productmaincontainer">
                {/* <h1>Product</h1> */}
                {
                    dataBox.map((user) => {
                        return (
                            <>
                                <div className="productcardsection">
                                    <div className="productimagesection">
                                        <img src={user.imgUrl} alt="imagenotfound" />
                                        {/* <FontAwesomeIcon icon={faHeart} id='hearticon' /> */}
                                    </div>
                                    <div className="producttxtsection">
                                        <h5>{user.productName}</h5>
                                        <p><span style={{ color: 'oranged' }}>{user.price}</span></p>
                                        <button>Add to cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Product;