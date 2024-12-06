import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div>
      <h1>Forgot Your Password?</h1>
      <p>
        Enter the e-mail address associated with your account. Click submit to
        have a password reset link e-mailed to you.
      </p>
      <form className="py-4">
        <h4 className="py-2 border-b-2 text-xl">Your E-Mail Address</h4>
        <div className="flex flex-col sm:flex-row my-4">
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
        <div className="flex justify-between">
          <Link
            to="/account"
            className="px-4 py-2 text-sm rounded-sm bg-slate-200 text-black border hover:border-slate-300 shadow-md"
          >
            Back
          </Link>
          <input
            type="submit"
            value="Continue"
            className="px-4 py-2 text-sm bg-nav-blue rounded-sm text-white hover:text-black cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
