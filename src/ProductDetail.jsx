import { useParams, Link } from 'react-router-dom';
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdAddCircle } from "react-icons/md";
import { GrSubtract } from "react-icons/gr";
import NotFound from './NotFound';
import { getProductData } from './api';
import Loading from './Loading';

function ProductDetail({ onAddToCart }) {
    const id = +useParams().id;

    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);

    const memoizedGetProductData = useMemo(() => getProductData, []);

    useEffect(() => {
        setLoading(true);
        memoizedGetProductData(id)
            .then((product) => {
                setProduct(product);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [id, memoizedGetProductData]);

    const handleCount = useCallback((event) => {
        setCount(+event.target.value);
    }, []);

    const handleButtonClick = useCallback(() => {
        onAddToCart(id, count);
    }, [id, count, onAddToCart]);

    const handleCountZero = useCallback(() => {
        setCount(1);
    }, []);

    const countIncrease = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const countDecrease = useCallback(() => {
        if (count > 1) {
            setCount((prevCount) => prevCount - 1);
        }
    }, [count]);

    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <NotFound />;
    }

    return (
        <>
            <Link to="/" className="flex items-center text-primary-default mt-2 ml-20">
                <BiArrowBack className="text-3xl" /> back to home page
            </Link>

            <div className="flex flex-col md:flex-row shadow-md md:space-x-4 space-y-5 bg-white my-4 mx-20 p-5 mt-10 h-1/2">
                <img className="w-80 h-96" src={product.image} alt={product.title} />

                <div className="md:flex md:flex-col">
                    <h2 className="text-black text-xl lg:text-4xl mt-2">{product.title}</h2>
                    <h3 className="text-gray-500 lg:text-xl font-semibold mt-2">${product.price}.00</h3>
                    <p className="text-gray-500 mt-2 lg:text-xl">{product.description}</p>
                    <div className="md:flex md:justify-center md:pb-4 md:mt-4 gap-3">
                        <div className="flex items-center gap-2">
                            <GrSubtract className="text-2xl" onClick={countDecrease} />
                            <input
                                className="border border-gray-500 px-2 py-1 mt-2 md:mt-0 w-15 mb-2"
                                value={count}
                                onChange={handleCount}
                                type="number"
                                min="1"
                            />
                            <MdAddCircle className="text-2xl" onClick={countIncrease} />
                        </div>
                        <button
                            className="bg-primary-default text-white py-1 px-4 rounded-md md:ml-2 md:px-6"
                            onClick={handleButtonClick}
                        >
                            Add To Cart
                        </button>
                        <span className="md:flex-grow"></span>
                    </div>
                    <div className="mt-3 text-xl text-blue-500"></div>
                    <div className="flex justify-between self-end gap-4 mt-4">
                        {id > 1 && (
                            <div>
                                <Link to={"/details/" + (id - 1)}>
                                    <FaArrowLeft onClick={handleCountZero} className="text-xl self-center text-primary-default" />
                                </Link>
                            </div>
                        )}
                        <div>
                            <Link to={"/details/" + (id + 1)} className="flex">
                                <FaArrowRight onClick={handleCountZero} className="text-xl self-center text-primary-default" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetail;
