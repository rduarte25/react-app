import React from 'react'
import { ProductCard } from '../components';

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    image: './coffee-mug.png'
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image image={product.image}/>
                    <ProductCard.Title title={product.title}/>
                    <ProductCard.Buttons />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage
