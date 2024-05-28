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
      <div className="flex items-center justify-center gap-10 containerH ">
        <img
          className=" size-[500px] object-cover rounded-xl"
          src={data.attributes.image}
          alt=""
        />
        <div className="w-[500px] text-start flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className=" font-bold text-3xl capitalize">
              {data.attributes.title}
            </h2>
            <h3 className=" opacity-50 font-bold text-xl ">
              {data.attributes.company}
            </h3>
            <h5>
              {Intl.NumberFormat("us-US", {
                style: "currency",
                currency: "USD",
              }).format(data.attributes.price)}
            </h5>
          </div>
          <div className="flex flex-col gap-5">
            <p className="tracking-wide leading-7">
              {data.attributes.description}
            </p>
            <p>
              Colors: <span>{data.attributes.color}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
