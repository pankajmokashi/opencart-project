import BackButton from "../../components/BackButton";
import ContinueButton from "../../components/ContinueButton";

function Newsletter() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Newsletter Subscription
      </h1>
      <div className="ml-8 mt-2">
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <span className="mr-3 text-sm text-[#666]">
            Subscribe
          </span>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
      </div>
      <div className="mt-4 pt-2 flex justify-between ">
        <BackButton />
        <ContinueButton />
      </div>
    </div>
  );
}

export default Newsletter;
