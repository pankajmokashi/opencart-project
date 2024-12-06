import Search from "../assets/icons/Search";

function SearchBar() {
  return (
    <div className="w-full md:w-[300px] lg:w-[350px] flex justify-between border-2 border-light-gray rounded">
      <input
        id="search"
        type="text"
        placeholder="Search"
        className="flex-grow px-2 py-1.5 outline-none"
      />
      <div className="px-5 py-1.5 flex items-center bg-light-gray hover:bg-gray-200 cursor-pointer">
        <span className="w-4">
          <Search />
        </span>
      </div>
    </div>
  );
}

export default SearchBar;
