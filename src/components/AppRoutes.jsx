import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "../pages/Home";
import ContactUs from "../pages/CantactUs";
import Account from "../pages/Account/Account";
import Login from "../pages/Account/Login";
import Register from "../pages/Account/Register";
import Logout from "../pages/Account/Logout";
import ProtectedRoute from "./ProtectedRoute";
import EditInformation from "../pages/Account/EditInformation";
import Checkout from "../pages/Cart/Checkout";
import MyWishList from "../pages/Account/MyWishList";
import ChangePassword from "../pages/Account/ChangePassword";
import AddressBook from "../pages/Account/AddressBook";
import Orders from "../pages/Account/Orders";
import Downloads from "../pages/Account/Downloads";
import Subscriptions from "../pages/Account/Subscriptions";
import RewardPoints from "../pages/Account/RewardPoints";
import ProductReturns from "../pages/Account/ProductReturns";
import Transactions from "../pages/Account/Transactions";
import Newsletter from "../pages/Account/Newsletter";
import Affiliate from "../pages/Account/Affiliate";
import Terms from "../pages/Terms";
import DeliveryInformation from "../pages/DeliveryInformation";
import AboutUs from "../pages/AboutUs";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Brands from "../pages/Brands";
import GiftCertificates from "../pages/Account/GiftCertificates";
import SpecialOffers from "../pages/SpecialOffers";
// import SiteMap from "../pages/SiteMap";
import Cart from "../pages/cart/Cart";
import AccountPage from "../outlets/AccountPage";
import CatalogPage from "../outlets/CatalogPage";
import Category from "../pages/Category";
import SubCategory from "../pages/SubCategory";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },
  { path: "/cart/checkout", element: <Checkout /> },
  { path: "/contact-us", element: <ContactUs /> },
  { path: "/terms", element: <Terms /> },
  { path: "/delivery-information", element: <DeliveryInformation /> },
  { path: "/about-us", element: <AboutUs /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  // { path: "/site-map", element: <SiteMap /> },
  { path: "/brand", element: <Brands /> },
  { path: "/special-offers", element: <SpecialOffers /> },
];

const protectedRoutes = [
  { path: "/account", element: <Account /> },
  { path: "/account/edit-information", element: <EditInformation /> },
  { path: "/account/address-book", element: <AddressBook /> },
  { path: "/account/wishlist", element: <MyWishList /> },
  { path: "/account/orders", element: <Orders /> },
  { path: "/account/downloads", element: <Downloads /> },
  { path: "/account/subscriptions", element: <Subscriptions /> },
  { path: "/account/reward-points", element: <RewardPoints /> },
  { path: "/account/product-returns", element: <ProductReturns /> },
  { path: "/account/transactions", element: <Transactions /> },
  { path: "/account/affiliate", element: <Affiliate /> },
  { path: "/account/newsletter", element: <Newsletter /> },
  { path: "/account/gift-certificates", element: <GiftCertificates /> },
  { path: "/account/logout", element: <Logout /> },
];

function AppRoutes() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main>
        <div className="min-h-screen px-4 sm:px-8">
          <div className="mx-auto max-w-xl md:max-w-screen-xl mb-12">
            <Routes>
              {routes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              <Route path="/account" element={<AccountPage />}>
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
                <Route
                  path="/account/change-password"
                  element={<ChangePassword />}
                />
                {protectedRoutes.map(({ path, element }) => (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <ProtectedRoute
                        isAllowed={isAuthenticated}
                        redirectTo="/account/login"
                      >
                        {element}
                      </ProtectedRoute>
                    }
                  />
                ))}
              </Route>
              <Route path="/catalog" element={<CatalogPage />}>
                <Route path="/catalog/:category" element={<Category />} />
                <Route
                  path="/catalog/:category/:subcategory"
                  element={<SubCategory />}
                />
              </Route>
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default AppRoutes;
