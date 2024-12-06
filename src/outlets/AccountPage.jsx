import { useContext } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function AccountPage() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <div>
      <div className="mb-6">
        <Breadcrumbs />
      </div>
      <div className="grid gridcol-1 md:grid-cols-8 gap-6">
        <div className="col-span-6">
          <Outlet />
        </div>

        <div className="hidden md:block col-span-2">
          <div className="flex flex-col text-sm border-x border-t">
            {!isAuthenticated && (
              <>
                <Link className="px-4 py-2 border-b" to="/account/login">
                  Login
                </Link>
                <Link className="px-4 py-2 border-b" to="/account/register">
                  Register
                </Link>
                <Link
                  className="px-4 py-2 border-b"
                  to="/account/change-password"
                >
                  Forgotten Password
                </Link>
              </>
            )}

            <Link className="px-4 py-2 border-b" to="/account">
              My Account
            </Link>
            {isAuthenticated && (
              <>
                <Link
                  className="px-4 py-2 border-b"
                  to="/account/edit-information"
                >
                  Edit Account
                </Link>
                <Link
                  className="px-4 py-2 border-b"
                  to="/account/change-password"
                >
                  Password
                </Link>
              </>
            )}
            <Link className="px-4 py-2 border-b" to="/account/address-book">
              Address Book
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/wishlist">
              Wish List
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/orders">
              Order History
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/downloads">
              Downloads
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/subscriptions">
              Subscriptions
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/reward-points">
              Reward Points
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/product-returns">
              Returns
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/transactions">
              Transactions
            </Link>
            <Link className="px-4 py-2 border-b" to="/account/newsletter">
              Newletter
            </Link>
            {isAuthenticated && (
              <Link className="px-4 py-2 border-b" to="/account/logout">
                Logout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
