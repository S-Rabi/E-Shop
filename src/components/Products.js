import React, { useEffect, useState } from "react";

import Card from "./Card";

export const Products = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const json = await response.json();
    if (json) {
      setData(json);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  console.log("data is =>", data);

  return (
    <div className="flex flex-wrap justify-center ">
      {data.map((post) => (
        <div key={post.id}>
          <Card el={post} />
        </div>
      ))}
    </div>
  );
};
export default Products;
