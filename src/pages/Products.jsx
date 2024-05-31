import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import { customFetch } from "../utils";
import ProductList from "../components/ProductList";
import { LuLayoutGrid } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import { list } from "postcss";
export const loader = async () => {
  const req = await customFetch(``);
  const product = await req.data;
  return { product };
};
function Products() {
  let [grid, setGrid] = useState("grid");
  return (
    <div className=" containerH mb-5">
      <div className="flex justify-end containerH gap-2 my-5">
        <button
          onClick={() => {
            setGrid("grid");
          }}
          className={`btn ${
            grid == "grid" ? "btn-info btn-circle" : "btn-secondary"
          }`}
        >
          <LuLayoutGrid className=" size-4" />
        </button>
        <button
          onClick={() => {
            setGrid("list");
          }}
          className={`btn  ${
            grid == "list" ? "btn-info btn-circle" : "btn-secondary"
          }`}
        >
          <LuLayoutList className=" size-4" />
        </button>
      </div>
      <div className="  items-center flex justify-center">
        {grid == "grid" ? <ProductGrid /> : <ProductList />}
      </div>
    </div>
  );
}

export default Products;
