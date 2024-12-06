import Breadcrumbs from "../components/Breadcrumbs";

function CantactUs() {
  return (
    <div>
      <div className="mb-6">
        <Breadcrumbs />
      </div>
      <div className="text-[#444]">
        <h1 className="text-4xl mb-3">Cantact Us</h1>
        <h3 className="text-xl mb-2">Our Locations</h3>
        <div className="p-4 mb-2 text-xs border-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h5 className="mb-2 text-black font-medium">Your Store</h5>
            <p className="mb-3">Address 1</p>
          </div>
          <div>
            <h5 className="mb-2 text-black font-medium">Telephone</h5>
            <p className="mb-3">123456789</p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="text-mid-gray">
          <h4 className="py-2 border-b-2 text-xl">Contact Form</h4>
          <form className="py-4">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <label
                htmlFor="name"
                className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
              >
                Your Name
              </label>
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="no"
                  className="w-full max-w-xl px-4 py-1 border-2 outline-none text-[#444]"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mb-4">
              <label
                htmlFor="email"
                className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
              >
                E-Mail Address
              </label>
              <div className="w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="no"
                  className="w-full max-w-xl px-4 py-1 border-2 outline-none text-[#444]"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mb-4">
              <label
                htmlFor="enquiry"
                className="min-w-[150px] lg:min-w-[250px] py-1 sm:py-0"
              >
                Enquiry
              </label>
              <div className="w-full">
                <textarea
                  name="enquiry"
                  id="enquiry"
                  rows={10}
                  className="w-full max-w-xl p-4 border-2 outline-none text-[#444]"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row mb-4">
              <div className="min-w-[250px]"></div>
              <div className="w-full max-w-xl flex justify-end">
                <input
                  type="submit"
                  value="Submit"
                  className="px-4 py-2 text-sm bg-nav-blue rounded-sm text-white hover:text-black cursor-pointer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CantactUs;
