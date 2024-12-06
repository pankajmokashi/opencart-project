import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import InputDiv from "../../components/InputDiv";

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
        <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
          Register Account
        </h1>
        <p className="text-xs my-2">
          If you already have an account with us, please login at the{" "}
          <Link to="/account/login" className="text-nav-blue">
            login page
          </Link>
          .
        </p>
      </div>
      <div className="mt-4 mb-12 text-[#666]">
        <form className="sm:px-4 mt-4 flex flex-col gap-4">
          <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
            Your Personal Details
          </h2>
          <InputDiv
            label="First Name"
            name="firstname"
            type="text"
            placeholder=""
          />
          <InputDiv
            label="Last Name"
            name="lastname"
            type="text"
            placeholder=""
          />
          <InputDiv label="E-mail" name="email" type="email" placeholder="" />
          <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
            Your Password
          </h2>
          <InputDiv
            label="Password"
            name="password"
            type="password"
            placeholder="Password"
          />
          <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
            Newsletter
          </h2>
          <div className="">
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <span className="mr-3 text-sm text-[#666]">Subscribe</span>
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="pt-4 flex justify-end">
            <div className="w-full flex flex-col sm:flex-row sm:items-center gap-3">
              <div className="flex items-center gap-3">
                <p className="text-xs">
                  I have read and agree to the Privacy Policy
                </p>
                <div className="flex items-center">
                  <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" />
                    <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 scale-90"></div>
                  </label>
                </div>
              </div>

              <button
                onClick={login}
                className="px-4 py-2 text-xs sm:text-sm lg:text-base border rounded-md bg-nav-blue text-white hover:text-black"
              >
                Continue
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
