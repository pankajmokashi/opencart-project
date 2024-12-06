import Cart from "../assets/icons/Cart";

function CartDropdown() {
  return (
    <div className="w-full md:max-w-[300px] rounded-md cursor-pointer bg-opacity-80 hover:bg-opacity-100 bg-black text-white">
      <div className="px-6 py-2 flex items-center justify-center">
        <span className="w-6 mr-2">
          <Cart />
        </span>
        <span className="text-sm sm:text-base">0 item(s) - $0.00</span>
      </div>
    </div>
  );
}

export default CartDropdown;
