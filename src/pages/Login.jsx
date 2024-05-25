import Input from "../components/Input";
import { Link } from "react-router-dom";
import { Form } from "react-router-dom";
function Login() {
  return (
    <div className="flex items-center justify-center h-[100vh] place-items-center">
      <div className="flex flex-col items-center justify-items-stretch  h-fu  gap-5 place-content-center bg-base-100 p-10 rounded-xl  drop-shadow-xl ">
        <h1 className="text-2xl font-bold">Login</h1>
        <Form method="post" className="flex flex-col gap-3">
          <Input plesholder="Email" type="text" name="email">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
          </Input>

          <Input plesholder="password" type="password" name="pasword">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
          </Input>
          <button className="btn btn-primary w-full">Login</button>
        </Form>
        <Link to="/" className="btn btn-info w-full mt-[-10px]">
          Guest User
        </Link>
        <p>
          Already a member?{" "}
          <Link className="link link-secondary" to="/register">
            Registor
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
