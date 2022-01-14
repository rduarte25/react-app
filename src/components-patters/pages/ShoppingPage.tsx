import { ProductCard } from "../components";
import "../styles/custom-style.css";
import { products } from "../data/products";
import { useShoppingCart } from '../hooks/useShoppingCart';

const ShoppingPage = () => {
  
  const {shoppingCart, onProductCountChange} = useShoppingCart();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={`${product.id}-${product.title}`}
            onChange={onProductCountChange}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductCard.Image image={product.image} className="custom-image" />
            <ProductCard.Title
              title={product.title}
              className="text-white text-bold"
            />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-card">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            style={{
              width: "100px",
            }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductCard.Image image={product.image} className="custom-image" />
            <ProductCard.Buttons
              className="custom-buttons"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
