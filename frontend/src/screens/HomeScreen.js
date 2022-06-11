import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Spinner from '../components/Spinner';
import { useGetProductsQuery } from '../services/productsApi';

const HomeScreen = () => {
    const [products, setProducts] = useState([]);

    const { data: productsList, isLoading } = useGetProductsQuery()


    useEffect(() => {
        if (productsList) {
            setProducts(productsList)
        }

    }, [productsList])

    if (isLoading) return <Spinner />

    return (
        <>
            <h1 className="animate__animated animate__bounceInLeft">Latest Products</h1>
            <Row>
                {
                    products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default HomeScreen