import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "../CartContext";

import Card from "./Card";

export const Products = () => {
  const { filter } = useContext(CartContext);
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
  console.log("filter is =>", filter);
  return (
    <>
      <div className="home-container flex flex-row  ">
        <div className="flex flex-wrap justify-center">
          {data
            .filter((item) => {
              return filter.trim() === ""
                ? item
                : item.title.toLowerCase().includes(filter.toLowerCase())
                ? item
                : null;
            })
            .map((post) => (
              <div key={post.id}>
                <Card el={post} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default Products;
