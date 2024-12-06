import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import InputDiv from "../../components/InputDiv";
import Switch from "../../components/Switch";

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
          <div>
            <Switch label="Subscribe" name="subscribe" />
          </div>
          <div className="pt-4">
            <div className="w-full flex flex-col sm:flex-row sm:items-center justify-end gap-3">
              <div className="flex items-center">
                <p className="text-[10px] sm:text-xs">
                  I have read and agree to the Privacy Policy
                </p>
                <div className="flex items-center scale-100 sm:scale-90">
                  <Switch label="" name="privacy" />
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
