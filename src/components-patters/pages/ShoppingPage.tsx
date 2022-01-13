import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-style.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  image: "./coffee-mug.png",
};

const ShoppingPage = () => {
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
        <ProductCard product={product}
        className="bg-dark text-white"
        >
          <ProductCard.Image image={product.image} className="custom-image"/>
          <ProductCard.Title title={product.title} className="text-white text-bold"/>
          <ProductCard.Buttons className="custom-buttons"/>
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage image={product.image} className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle title={product.title} className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        
        <ProductCard product={product}
          style={{
            backgroundColor: '#70d1f8'
          }}
        >
          <ProductImage image={product.image} style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductTitle title={product.title} style={{
            fontWeight: "bold",
          }}/>
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }}/>
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
