import { useEffect, useState } from "react";
const useP = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return [products];
};

export default useP;
