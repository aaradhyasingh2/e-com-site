import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/product.css';
// import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import phone from '../images/phone.jpg';
// import camera from '../images/camera.jpg';
// import Laptop from '../images/laptop.jpg';
// import speaker from '../images/speaker.jpg';
// import menjacket from '../images/camera.jpg';
// import phone1 from '../images/phone.jpg';
// import menjacket2 from '../images/camera.jpg';
// import speaker1 from '../images/speaker.jpg';

const ProductPage = () => {

    const [productData, setProductData] = useState([]);


    // first way to call api using axios
    useEffect(() => {
        const apiFetchData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProductData(res.data);
                console.log(res.data);
            } catch (error) {
                console.log('error found: ', error);
            }
        };

        apiFetchData();
    }, [])


    // second way to call api using axios
    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get("https://fakestoreapi.com/products");
    //         setProductData(response.data);
    //     } catch (error) {
    //         console.log("Error found:", error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);


    // third way to call api using axios 
    // const getProductData = () => {
    //     axios.get('https://fakestoreapi.com/products')
    //         .then(
    //             (myData) => {
    //                 setProductData(myData.data)
    //                 console.log(myData)
    //             }
    //         )
    //         .catch(error => console.log('ERROR FOUND:', error));
    // };
    // getProductData();

    return (
        <>
            <div className="productmaincontainer">
                {/* <h1>Product</h1> */}
                {
                    productData.map((item) => {
                        return (
                            <>
                                <div className="productcardsection" key={item.id}>
                                    <div className="productimagesection">
                                        <img src={item.image} alt="imagenotfound" />
                                        {/* <FontAwesomeIcon icon={faHeart} id='hearticon' /> */}
                                    </div>
                                    <div className="producttxtsection">
                                        <h5>{item.title}</h5>
                                        <p className="description">{item.description}</p>
                                        <p>Rating:{item.rating.rate}, Count:{item.rating.count}</p>
                                        <p>Price: $<span style={{ color: 'oranged' }}>{item.price}</span></p>
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

export default ProductPage;