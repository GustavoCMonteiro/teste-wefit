import { useState, useEffect } from "react";
import { Oval } from "react-loader-spinner";
import { ProductData } from "../../types/interefaces";
import Card from "../../components/Cards";
import { Center, TryAgain, Wrapper } from "./style";

const Home = () => {
  const [products, setProducts] = useState<Array<ProductData>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const fetchProducts = async () => {
    setError(false);
    setLoading(true)

    try {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Wrapper>
      {loading ? (
        <Center>
          <Oval
            height={62}
            width={62}
            color="#999999"
            ariaLabel="oval-loading"
            secondaryColor="#999999"
            strokeWidth={4}
            strokeWidthSecondary={4}
          />
        </Center>
      ) : null}

      {error ? (
        <Center>
          <p>Não foi possivel completar a requisição</p>
          <TryAgain onClick={fetchProducts}>Tente novamente</TryAgain>
        </Center>
      ) : null}

      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </Wrapper>
  );
};

export default Home;
