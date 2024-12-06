import Breadcrumbs from "../components/Breadcrumbs";
import InputDiv from "../components/InputDiv";

function CantactUs() {
  return (
    <div>
      <div className="mb-6">
        <Breadcrumbs />
      </div>
      <div className="text-[#444]">
        <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
          Cantact Us
        </h1>
        <h2 className="text-xl mt-4">Our Locations</h2>
        <div className="p-4 my-2 text-xs border-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="mb-2 text-black font-medium">Your Store</h2>
            <p className="mb-3">Address 1</p>
          </div>
          <div>
            <h2 className="mb-2 text-black font-medium">Telephone</h2>
            <p className="mb-3">123456789</p>
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="mt-4 text-[#666]">
          <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
            Your Personal Details
          </h2>
          <form className="sm:px-4 mt-4 flex flex-col gap-4">
            <InputDiv
              label="Your Name"
              name="name"
              type="text"
              placeholder="Your Name"
            />
            <InputDiv
              label="E-mail"
              name="email"
              type="email"
              placeholder="E-mail"
            />
            <div className="text-xs sm:text-sm lg:text-base flex flex-col lg:flex-row gap-2 lg:items-center">
              <label htmlFor="enquiry" className="lg:min-w-[200px]">
                Enquiry
              </label>
              <textarea
                rows={5}
                name="enquiry"
                id="enquiry"
                placeholder="Enquiry"
                className="p-2 w-full rounded-md border border-[#e5e5e5]"
                autoComplete="off"
              />
            </div>
            <div className="pt-2 flex justify-end">
              <button className="px-4 py-2 text-xs sm:text-sm lg:text-base border rounded-md bg-nav-blue text-white hover:text-black">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CantactUs;
