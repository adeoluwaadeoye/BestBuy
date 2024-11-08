import Card from "../../components/Product/Card";
import products from "../../db/data";
import "../../styles/Product.css";

const Products = () => {
  const result = products.map((product) => (
    <Card
      key={product.id}
      id={product.id}
      img={product.img}
      title={product.title}
      rating={product.rating}
      reviews={product.reviews}
      newPrice={product.newPrice}
    />
  ));

  return (
    <section className="wrapper">
      {result}
    </section>
  );
};

export default Products;
