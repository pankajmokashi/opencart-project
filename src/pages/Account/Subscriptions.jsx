import ContinueButton from "../../components/ContinueButton";

function Subscriptions() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-medium text-[#444]">
        Subscriptions
      </h1>
      <p className="mt-2 sm:mt-4 text-xs sm:text-sm">No subscriptions found!</p>
      <div className="mt-4 pt-2 flex justify-end ">
        <ContinueButton />
      </div>
    </div>
  );
}

export default Subscriptions;
