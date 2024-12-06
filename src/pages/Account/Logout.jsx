import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Logout() {
  const { logout } = useContext(AuthContext);

  return (
    <div>
      <div>
        <h1 className="text-3xl">Account Logout</h1>
        <p className="text-xs my-4">
          Your shopping cart will be saved, the items inside it will be restored
          whenever you log back into your account.
        </p>
      </div>
      <div className="flex justify-end">
        <button
          onClick={logout}
          className="px-4 py-2 text-xs sm:text-sm lg:text-base border rounded-md bg-nav-blue text-white hover:text-black"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Logout;
