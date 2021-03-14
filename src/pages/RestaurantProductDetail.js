import React from 'react'
import {useParams} from 'react-router-dom';
import {Restaurant} from '../components/dummy';
import RestaurantCard from '../components/RestaurantCard';
import ProductCard from '../components/ProductCard';

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
                <RestaurantCard name={item.name} logo={item.logo} key={item.id} />
                <div className="products d-flex justify-content-between">
                    <p>Produk Partner Belum Ditambahkan</p>
                </div>
            </div>
        );
    } else {
        return (
            <div style={{ padding: "164px 0", margin: "0 auto", width: 1070}}>
                <RestaurantCard name={item.name} logo={item.logo} key={item.id} />
                <div className="products d-flex justify-content-between">
                    {products.map(product => <ProductCard product={product} />)}
                </div>
            </div>
        );
    }

}

export default RestaurantProductDetail
