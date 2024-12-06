import BackButton from "../../components/BackButton";
import ContinueButton from "../../components/ContinueButton";
import InputDiv from "../../components/InputDiv";

function Affiliate() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Your Affiliate Information
      </h1>
      <div className="mt-4 text-[#666]">
        <form className="sm:px-4 mt-4 flex flex-col gap-4">
          <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
            My Affiliate Account
          </h2>
          <InputDiv
            label="Company"
            name="company"
            type="text"
            placeholder="Company"
          />
          <InputDiv
            label="Web Site"
            name="website"
            type="text"
            placeholder="Web Site"
          />
          <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
            Payment Information
          </h2>
          <InputDiv
            label="Tax ID"
            name="taxID"
            type="text"
            placeholder="Tax ID"
          />
          <InputDiv
            label="Cheque Payee Name"
            name="checkpayee"
            type="text"
            placeholder="Cheque Payee Name"
          />
          <div className="pt-2 flex justify-between ">
            <BackButton />
            <ContinueButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Affiliate;
