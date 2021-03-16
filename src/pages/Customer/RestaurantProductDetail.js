import React from 'react'
import {useParams} from 'react-router-dom';

import {Restaurant} from '../../api/dummy';

import ProductCard from '../../components/Card/ProductCard';

function RestaurantProductDetail() {
    const {id} = useParams()

    const findItem = () => {
        const selected = Restaurant.find(item => item.id === parseInt(id));
        return selected;
    }

    const item = findItem();
    const products = item.products;

    if (products === undefined) {
        return (
            <div style={{ padding: "164px 0", margin: "0 auto", width: 1070}}>
                <h1 style={{ fontFamily: "'Abhaya Libre'", marginBottom: 10 }}>{ item.name }</h1>
                <div className="products d-flex justify-content-between">
                    <p>Produk Partner Belum Ditambahkan</p>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ padding: "164px 0", margin: "0 auto", width: 1070 }}>
                <h1 style={{ fontFamily: "'Abhaya Libre'" }}>{ item.name }</h1>
                <div className="products d-flex justify-content-between">
                    {products.map(product => <ProductCard product={product} restaurant={item.name} />)}
                </div>
            </div>
        );
    }

}

export default RestaurantProductDetail
