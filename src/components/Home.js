import React, { useEffect, useState } from "react";

import Card from "./Card";

export const Products = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  console.log("search is =>", search);

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
    <>
      <div className="home-container flex flex-row  ">
        <div className="flex flex-wrap justify-center">
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search);
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
