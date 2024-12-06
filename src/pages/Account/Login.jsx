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
          <h2 className="mb-1 text-2xl sm:text-3xl font-medium text-[#444]">
            New Customer
          </h2>
          <p className="mb-2 text-xs font-medium text-[#666]">
            Register Account
          </p>
          <p className="mb-4 text-xs text-[#666]">
            By creating an account you will be able to shop faster, be up to
            date on an order&apos;s status, and keep track of the orders you
            have previously made.
          </p>
          <div className="flex justify-end">
            <Link to="/account/register">
              <button className="px-4 py-2 text-xs border rounded-md bg-nav-blue text-white hover:text-black">
                Continue
              </button>
            </Link>
          </div>
        </div>
        <div className="p-4 border">
          <h2 className="mb-1 text-2xl sm:text-3xl font-medium text-[#444]">
            Returning Customer
          </h2>
          <p className="mb-2 text-xs font-medium text-[#666]">
            I am a returning customer
          </p>
          <form className="mt-4 flex flex-col gap-4 text-[#666]">
            <div className="flex gap-1 flex-col">
              <label htmlFor="email">E-Mail</label>
              <div className="w-full">
                <input
                  type="email"
                  placeholder="E-mail"
                  name="email"
                  id="email"
                  autoComplete="no"
                  className="p-2 w-full rounded-md border border-[#e5e5e5]"
                />
              </div>
            </div>
            <div className="flex gap-1 flex-col mb-4">
              <label htmlFor="password">Password</label>
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Password"
                  name="password"
                  id="password"
                  autoComplete="no"
                  className="p-2 w-full rounded-md border border-[#e5e5e5]"
                />
                <Link className="text-xs text-nav-blue">
                  Forgotten Password
                </Link>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={login}
                  className="px-4 py-2 text-xs border rounded-md bg-nav-blue text-white hover:text-black"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
