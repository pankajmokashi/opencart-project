import BackButton from "../../components/BackButton";
import ContinueButton from "../../components/ContinueButton";
import InputDiv from "../../components/InputDiv";

function EditInformation() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        My Account Information
      </h1>
      <div className="mt-4 text-[#666]">
        <h2 className="pb-1 text-lg sm:text-xl border-b border-[#e5e5e5]">
          Your Personal Details
        </h2>
        <form className="sm:px-4 mt-4 flex flex-col gap-4">
          <InputDiv
            label="First Name"
            name="firstname"
            type="text"
            placeholder=""
          />
          <InputDiv
            label="Last Name"
            name="lastname"
            type="text"
            placeholder=""
          />
          <InputDiv label="E-mail" name="email" type="email" placeholder="" />
          <div className="pt-2 flex justify-between ">
            <BackButton />
            <ContinueButton />
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditInformation;
