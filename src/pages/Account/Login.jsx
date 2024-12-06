import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated, login, redirectPath, setRedirectPath } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      const destination = redirectPath || "/account";
      setRedirectPath(null);
      navigate(destination);
    }
  }, [isAuthenticated, navigate, redirectPath, setRedirectPath]);

  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="p-4 border">
          <h2 className="text-3xl mb-1">New Customer</h2>
          <p className="text-sm font-medium mb-2">Register Account </p>
          <p className="text-sm mb-4">
            By creating an account you will be able to shop faster, be up to
            date on an order&apos;s status, and keep track of the orders you
            have previously made.
          </p>
          <div className="flex justify-end">
            <Link
              to="/account/register"
              className="px-4 py-2 text-sm bg-nav-blue rounded-sm text-white hover:text-black cursor-pointer"
            >
              Continue
            </Link>
          </div>
        </div>
        <div className="p-4 border">
          <h2 className="text-3xl mb-1">Returning Customer</h2>
          <p className="text-sm font-medium mb-2">I am a returning customer</p>
          <form>
            <div className="flex gap-1 flex-col mb-4">
              <label
                htmlFor="email"
                className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
              >
                E-Mail
              </label>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  autoComplete="no"
                  className="w-full max-w-xl px-4 py-1 border-2 outline-none text-[#444]"
                />
              </div>
            </div>
            <div className="flex gap-1 flex-col mb-4">
              <label
                htmlFor="password"
                className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
              >
                Password
              </label>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="no"
                  className="w-full max-w-xl px-4 py-1 border-2 outline-none text-[#444]"
                />
                <Link className="text-sm text-nav-blue" to="#">Forgotten Password</Link>
              </div>
              <div className="flex justify-end">
                <input
                  type="submit"
                  value="Login"
                  onClick={login}
                  className="px-4 py-2 text-sm bg-nav-blue rounded-sm text-white hover:text-black cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
