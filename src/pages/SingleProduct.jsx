import { useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utils/index";
import { Link } from "react-router-dom";
import { numberAmout } from "../components/OptionNumber";
export const loader = async ({ params }) => {
  const req = await customFetch(`/${params.id}`);
  const product = req.data;
  return { product };
};

function SingleProduct() {
  let { product } = useLoaderData();
  let { data } = product;
  let { company, description, colors, price, title, image } = data.attributes;
  let amoutPrice = formatPrice(price);
  let amout = numberAmout(10);
  return (
    <div className=" containerH mt-10 font-medium my-10">
      <p className="flex gap-3 m-5">
        <Link className="link link-success" to="/">
          Home
        </Link>{" "}
        &rsaquo;
        <Link className="link link-success" to="/prodacts">
          Product
        </Link>
      </p>
      <div className="grid gap-y-8 items-center lg:grid-cols-2 containerH ">
        <img
          className=" size-[500px] object-cover rounded-xl"
          src={image}
          alt=""
        />
        <div className="w-[500px] text-start flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <h2 className=" font-bold text-3xl capitalize">{title}</h2>
            <h3 className=" opacity-50 font-bold text-xl ">{company}</h3>
            <h5>{amoutPrice}</h5>
          </div>
          <div className="flex flex-col gap-5">
            <p className="tracking-wide leading-7 font-normal">{description}</p>
            <div>
              <p>Colors:</p>
              <ul className="flex  gap-2 my-2">
                {colors.map((color, id) => {
                  return (
                    <li
                    
                      key={id}
                      className={`size-6  border bg-[${color}] rounded-full`}
                      bgcolor={color}
                    ></li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p>Amout</p>
              <select
                name=""
                id=""
                className=" w-96 p-2 border rounded-xl border-primary my-2"
              >
                {amout.map((number) => {
                  return (
                    <option key={number} value={number}>
                      {number}
                    </option>
                  );
                })}
              </select>
            </div>
            <div>
              <button className="btn btn-primary uppercase">add to bag</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
