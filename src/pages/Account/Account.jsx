import { Link } from "react-router-dom";

function Account() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="mb-1 text-2xl font-medium text-dark-gray">My Account</h2>
        <ul className="text-xs text-nav-blue flex flex-col gap-1">
          <li>
            <Link to="/account/edit-information">
              Edit your account information
            </Link>
          </li>
          <li>
            <Link to="/account/change-password">Change your password</Link>
          </li>
          <li>
            <Link to="/account/address-book">
              Modify your address book entries
            </Link>
          </li>
          <li>
            <Link to="/account/wishlist">Modify your wish list</Link>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="mb-1 text-2xl font-medium text-dark-gray">My Orders</h2>
        <ul className="text-xs text-nav-blue flex flex-col gap-1">
          <li>
            <Link to="/account/orders">View your order history</Link>
          </li>
          <li>
            <Link to="/account/subscriptions">Subscriptions</Link>
          </li>
          <li>
            <Link to="/account/downloads">Downloads</Link>
          </li>
          <li>
            <Link to="/account/reward-points">Your Reward Points</Link>
          </li>
          <li>
            <Link to="/account/product-returns">View your return requests</Link>
          </li>
          <li>
            <Link to="/account/transactions">Your Transactions</Link>
          </li>
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="mb-1 text-2xl font-medium text-dark-gray">
          My Affiliate Account
        </h2>
        <Link to="/account/affiliate" className="text-xs text-nav-blue">
          Register for an affiliate account
        </Link>
      </div>
      <div className="mb-4">
        <h2 className="mb-1 text-2xl font-medium text-dark-gray">Newsletter</h2>
        <Link to="/account/newsletter" className="text-xs text-nav-blue">
          Subscribe / unsubscribe to newsletter
        </Link>
      </div>
    </div>
  );
}

export default Account;
