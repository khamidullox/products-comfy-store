import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
function HomeList() {
  let { product } = useLoaderData();
  let { data } = product;
  console.log(data);
  return (
    <div className="containerH flex justify-center  gap- mb-5 items-center  md:flex-col flex-col">
      <h2 className="text-xl font-semibold m-5  ">Featured Products</h2>
      <hr className=" w-full" />
      <div className="flex gap-5 justify-between items-baseline ">
        {data &&
          data.map((product) => {
            return (
              <Link
                key={product.id}
                to={`/prodact/${product.id}`}
                className="card w-96 bg-base-100 shadow-xl hover:drop-shadow-2xl  "
              >
                <figure className="px-10 pt-10">
                  <img
                    src={product.attributes.image}
                    alt="Shoes"
                    className="rounded-xl size-40 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{product.attributes.title}</h2>

                  <div className="card-actions">
                    <button className="">${product.attributes.price}</button>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default HomeList;
