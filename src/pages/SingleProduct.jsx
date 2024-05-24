import { useLoaderData } from "react-router-dom";
import { customFetch } from "../app/index";
import { Link } from "react-router-dom";
export const loader = async ({ params }) => {
  const req = await customFetch(`/${params.id}`);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  let { product } = useLoaderData();
  let { data } = product;

  return (
    <div className=" containerH mt-16">
      <p className="flex gap-3 m-5">
        <Link className="link link-success" to="/">
          Home
        </Link>{" "}
        &rsaquo;
        <Link className="link link-success" to="/prodacts">
          Product
        </Link>
      </p>
      <div className="flex items-center justify-center gap-52 containerH ">
        <img
          className=" size-96 object-cover rounded-xl"
          src={data.attributes.image}
          alt=""
        />
        <div className="">
          <h2 className=" font-bold text-3xl">{data.attributes.title}</h2>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
