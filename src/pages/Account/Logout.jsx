import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h1 className="text-3xl mb-2">Account Logout</h1>
        <p className="text-sm mb-2">
          You have been logged off your account. It is now safe to leave the
          computer.
        </p>
        <p className="text-sm mb-2">
          Your shopping cart has been saved, the items inside it will be
          restored whenever you log back into your account.
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={logout}
          className="px-4 py-2 text-sm bg-nav-blue rounded-sm text-white hover:text-black cursor-pointer"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Logout;
