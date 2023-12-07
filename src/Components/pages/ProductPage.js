import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../css/product.css';
import { AppContext } from '../../Context/productContext';

const ProductPage = ({setCountCartProduct}) => {
    const [productData, setProductData] = useState([]);
    const [addCartProduct, setAddCartProduct] = useContext(AppContext);
    const [showFullDescription, setShowFullDescription] = useState({});

    useEffect(() => {
        const apiFetchData = async () => {
            try {
                const res = await axios.get("https://fakestoreapi.com/products");
                setProductData(res.data);
            } catch (error) {
                console.log('error found: ', error);
            }
        };

        apiFetchData();
    }, []);

    // const handleClickCart = (item) => {
    //     console.log(item);
    //     setAddCartProduct(item);
    // };

    const handleClickCart = (item) => {
        console.log(item);
        setAddCartProduct((prevProducts) => [...prevProducts, item]);
        setCountCartProduct((prevCount) => prevCount + 1); //count cart item
    };

    const handleReadMoreToggle = (id) => {
        setShowFullDescription((prevShowFullDescription) => ({
            ...prevShowFullDescription,
            [id]: !prevShowFullDescription[id],
        }));
    };

    return (
        <>
            <div className="productmaincontainer">
                {productData.map((item) => (
                    <div className="productcardsection" key={item.id}>
                        <div className="productimagesection">
                            <img src={item.image} alt="imagenotfound" />
                        </div>
                        <div className="producttxtsection">
                            <h5>{item.title}</h5>
                            <p>Rating: {item.rating.rate}, Count: {item.rating.count}</p>
                            <h5>Price: $<span style={{ color: 'red' }}>{item.price}</span></h5>
                            <p className="description">
                                {showFullDescription[item.id]
                                    ? item.description
                                    : `${item.description.slice(0, 15)}... `}
                                <span
                                    style={{ color: 'blue', cursor: 'pointer' }}
                                    onClick={() => handleReadMoreToggle(item.id)}
                                >
                                    {showFullDescription[item.id] ? ' Read less' : ' Read more'}
                                </span>
                            </p>
                            <button onClick={() => handleClickCart(item)}>Add to cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductPage;
