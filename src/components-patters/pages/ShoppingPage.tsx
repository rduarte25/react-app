import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import "../styles/custom-style.css";
import { products } from '../data/products';


const ShoppingPage = () => {

  let product = products[0];

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <ProductCard
        product={product}
        className="bg-dark text-white"
        key={`${product.id}-${product.title}`}
        initialValue={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ( {handleReset, handleIncrease, count, isMaxCountReached, maxCount} ) => (
            <>
              <ProductImage image={product.image} className="custom-image" />
              <ProductTitle
                title={product.title}
                className="text-bold"
              />
              <ProductButtons className="custom-buttons" />
              <button onClick={handleReset}>Reset</button>
              <button onClick={() => handleIncrease(-2)}>-2</button>
              { (!isMaxCountReached && <button onClick={() => handleIncrease(2)}>+2</button>)}
              <span>count: {count} - {maxCount}</span>
            </>
          )
        }
      </ProductCard>
      <div className="shopping-card">
        
      </div>
    </div>
  );
};

export default ShoppingPage;
