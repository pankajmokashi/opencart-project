import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="px-4 sm:px-8 bg-dark-gray text-white">
        <div className="mx-auto max-w-xl md:max-w-screen-xl py-3">
          <div className="grid sm:grid-cols-4 pt-5 gap-8 sm:gap-4">
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-base lg:text-lg mb-2 sm:mb-3">
                Information
              </h3>
              <ul className="text-sm flex flex-col gap-1 text-gray-300">
                <li>
                  <Link to="/terms" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="delivery-information" className="hover:text-white">
                    Delivery Information
                  </Link>
                </li>
                <li>
                  <Link to="about-us" className="hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-base lg:text-lg mb-2 sm:mb-3">
                Customer Service
              </h3>
              <ul className="text-sm flex flex-col gap-1 text-gray-300">
                <li>
                  <Link to="contact-us" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/product-returns"
                    className="hover:text-white"
                  >
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to="/site-map" className="hover:text-white">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-base lg:text-lg mb-2 sm:mb-3">
                Extras
              </h3>
              <ul className="text-sm flex flex-col gap-1 text-gray-300">
                <li>
                  <Link to="/brand" className="hover:text-white">
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account/gift-certificates"
                    className="hover:text-white"
                  >
                    Gift Certificates
                  </Link>
                </li>
                <li>
                  <Link to="/account/affiliate" className="hover:text-white">
                    Affiliate
                  </Link>
                </li>
                <li>
                  <Link to="/special-offers" className="hover:text-white">
                    Specials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="font-semibold text-base lg:text-lg mb-2 sm:mb-3">
                My Account
              </h3>
              <ul className="text-sm flex flex-col gap-1 text-gray-300">
                <li>
                  <Link to="/account" className="hover:text-white">
                    My Account
                  </Link>
                </li>
                <li>
                  <Link to="/account/orders" className="hover:text-white">
                    Order History
                  </Link>
                </li>
                <li>
                  <Link to="/account/wishlist" className="hover:text-white">
                    Wish List
                  </Link>
                </li>
                <li>
                  <Link to="/account/newsletter" className="hover:text-white">
                    Newsletter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-6 border-t border-slate-400"></div>
          <div className="mb-4 text-sm font-light text-center sm:text-left">
            <p className="mb-1">Powered By OpenCart</p>
            <p>Your Store © 2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
