import BackButton from "../../components/BackButton";
import ContinueButton from "../../components/ContinueButton";

function AddressBook() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Address Book Entries
      </h1>
      <p className="mt-2 sm:mt-4 text-xs sm:text-sm">
        You have no addresses in your account.
      </p>
      <div className="mt-4 pt-2 flex justify-between ">
        <BackButton />
        <ContinueButton />
      </div>
    </div>
  );
}

export default AddressBook;
