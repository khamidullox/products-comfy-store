import React from "react";
import { Link } from "react-router-dom";
function LoginSingUp() {
  return (
    <div className="w-full bg-neutral flex items-center justify-end gap-5 h-8  text-white   ">
      <div className="container flex justify-end gap-5 lg:containerH">
        <Link to="/login">Login</Link>
        <Link to="/register">Registor</Link>
      </div>
    </div>
  );
}

export default LoginSingUp;
