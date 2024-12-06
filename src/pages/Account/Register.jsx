import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const { isAuthenticated, login, redirectPath, setRedirectPath } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectPath || "/account"); // Redirect to stored path or default
      setRedirectPath(null); // Clear the stored path after navigation
    }
  }, [isAuthenticated, navigate, redirectPath, setRedirectPath]);

  return (
    <div>
      <div>
        <h1 className="text-3xl mb-2">Register Account</h1>
        <p className="text-sm mb-2">
          If you already have an account with us, please login at the{" "}
          <Link to="/account/login" className="text-nav-blue">
            login page
          </Link>
          .
        </p>
      </div>
      <div className="text-mid-gray">
        <form className="py-4">
          <h4 className="py-2 border-b-2 text-xl">Your Personal Details</h4>
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 mt-4">
            <label
              htmlFor="first-name"
              className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
            >
              First Name
            </label>
            <div className="w-full">
              <input
                type="text"
                placeholder="First Name"
                name="first-name"
                id="first-name"
                autoComplete="no"
                className="w-full max-w-xl px-4 py-1 border-2 outline-none text-[#444]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center mb-4">
            <label
              htmlFor="last-name"
              className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
            >
              Last Name
            </label>
            <div className="w-full">
              <input
                type="text"
                placeholder="Last Name"
                name="last-name"
                id="last-name"
                autoComplete="no"
                className="w-full max-w-xl px-4 py-1 border-2 outline-none text-[#444]"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row mb-4">
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
          <h4 className="py-2 border-b-2 text-xl">Your Password</h4>
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 mt-4">
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
            </div>
          </div>
          <h4 className="py-2 border-b-2 text-xl">Newsletter</h4>
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 mt-4">
            <label
              htmlFor="password"
              className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
            >
              Subscribe
            </label>
            <div className="w-full"></div>
          </div>
          <div className="w-full flex gap-4 items-center justify-end">
            <div>
              <p className="text-sm">
                I have read and agree to the{" "}
                <Link to="/privacy-policy" className="text-nav-blue">
                  Privacy Policy
                </Link>
              </p>
            </div>
            <input
              type="submit"
              value="Submit"
              onClick={login}
              className="px-4 py-2 text-sm bg-nav-blue rounded-sm text-white hover:text-black cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
